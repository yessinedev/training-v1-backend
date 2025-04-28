import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { Response } from '@prisma/client';

@Injectable()
export class ResponseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createResponseDto: CreateResponseDto): Promise<Response> {
    // Verify survey exists
    const survey = await this.prisma.survey.findUnique({
      where: { id: createResponseDto.surveyId },
    });
    
    if (!survey) {
      throw new NotFoundException(`Survey with ID ${createResponseDto.surveyId} not found`);
    }

    // If participantId is provided, verify participant exists
    if (createResponseDto.participantId) {
      const participant = await this.prisma.participant.findUnique({
        where: { user_id: createResponseDto.participantId },
      });
      
      if (!participant) {
        throw new NotFoundException(`Participant with ID ${createResponseDto.participantId} not found`);
      }
    }

    // Create response with answers in a transaction
    return this.prisma.$transaction(async (tx) => {
      // Create the response
      const response = await tx.response.create({
        data: {
          surveyId: createResponseDto.surveyId,
          participantId: createResponseDto.participantId,
        },
      });

      // Create all answers for this response
      if (createResponseDto.answers && createResponseDto.answers.length > 0) {
        await tx.answer.createMany({
          data: createResponseDto.answers.map(answer => ({
            responseId: response.id,
            questionId: answer.questionId,
            content: answer.content,
          })),
        });
      }

      // Return the response with its answers
      const createdResponse = await tx.response.findUnique({
        where: { id: response.id },
        include: { answers: true },
      });
      
      if (!createdResponse) {
        throw new NotFoundException(`Failed to retrieve created response with ID ${response.id}`);
      }
      
      return createdResponse;
    });
  }

  async findAll(): Promise<Response[]> {
    return this.prisma.response.findMany({
      include: { 
        answers: true,
        survey: true,
        participant: {
          include: { user: true }
        }
      },
    });
  }

  async findOne(id: string): Promise<Response> {
    const response = await this.prisma.response.findUnique({
      where: { id },
      include: { 
        answers: true,
        survey: true,
        participant: {
          include: { user: true }
        }
      },
    });
    
    if (!response) {
      throw new NotFoundException(`Response with ID ${id} not found`);
    }
    
    return response;
  }

  async findBySurveyId(surveyId: string): Promise<Response[]> {
    const survey = await this.prisma.survey.findUnique({
      where: { id: surveyId },
    });
    
    if (!survey) {
      throw new NotFoundException(`Survey with ID ${surveyId} not found`);
    }
    
    return this.prisma.response.findMany({
      where: { surveyId },
      include: { 
        answers: true,
        participant: {
          include: { user: true }
        }
      },
    });
  }

  async findByParticipantId(participantId: string): Promise<Response[]> {
    const participant = await this.prisma.participant.findUnique({
      where: { user_id: participantId },
    });
    
    if (!participant) {
      throw new NotFoundException(`Participant with ID ${participantId} not found`);
    }
    
    return this.prisma.response.findMany({
      where: { participantId },
      include: { 
        answers: true,
        survey: true
      },
    });
  }

  async update(id: string, updateResponseDto: UpdateResponseDto): Promise<Response> {
    const response = await this.findOne(id);
    
    return this.prisma.$transaction(async (tx) => {
      // Update response fields if provided
      if (updateResponseDto.surveyId || updateResponseDto.participantId) {
        await tx.response.update({
          where: { id },
          data: {
            surveyId: updateResponseDto.surveyId,
            participantId: updateResponseDto.participantId,
          },
        });
      }
      
      // Handle answers if provided
      if (updateResponseDto.answers && updateResponseDto.answers.length > 0) {
        // Delete existing answers
        await tx.answer.deleteMany({
          where: { responseId: id },
        });
        
        // Create new answers
        await tx.answer.createMany({
          data: updateResponseDto.answers.map(answer => ({
            responseId: id,
            questionId: answer.questionId,
            content: answer.content,
          })),
        });
      }
      
      // Return updated response with answers
      const updatedResponse = await tx.response.findUnique({
        where: { id },
        include: { answers: true },
      });
      
      if (!updatedResponse) {
        throw new NotFoundException(`Failed to retrieve updated response with ID ${id}`);
      }
      
      return updatedResponse;
    });
  }

  async remove(id: string): Promise<void> {
    const response = await this.findOne(id);
    
    await this.prisma.$transaction(async (tx) => {
      // Delete all answers associated with this response
      await tx.answer.deleteMany({
        where: { responseId: id },
      });
      
      // Delete the response
      await tx.response.delete({
        where: { id },
      });
    });
  }
}
