import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from '@prisma/client';

@Injectable()
export class AnswerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(responseId: string, createAnswerDto: CreateAnswerDto): Promise<Answer> {
    // Verify response exists
    const response = await this.prisma.response.findUnique({
      where: { id: responseId },
    });
    
    if (!response) {
      throw new NotFoundException(`Response with ID ${responseId} not found`);
    }
    
    // Verify question exists
    const question = await this.prisma.question.findUnique({
      where: { id: createAnswerDto.questionId },
    });
    
    if (!question) {
      throw new NotFoundException(`Question with ID ${createAnswerDto.questionId} not found`);
    }
    
    // Create the answer
    return this.prisma.answer.create({
      data: {
        responseId,
        questionId: createAnswerDto.questionId,
        content: createAnswerDto.content,
      },
      include: {
        question: true,
        response: true,
      },
    });
  }

  async findAll(): Promise<Answer[]> {
    return this.prisma.answer.findMany({
      include: {
        question: true,
        response: true,
      },
    });
  }

  async findOne(id: string): Promise<Answer> {
    const answer = await this.prisma.answer.findUnique({
      where: { id },
      include: {
        question: true,
        response: true,
      },
    });
    
    if (!answer) {
      throw new NotFoundException(`Answer with ID ${id} not found`);
    }
    
    return answer;
  }

  async findByResponseId(responseId: string): Promise<Answer[]> {
    const response = await this.prisma.response.findUnique({
      where: { id: responseId },
    });
    
    if (!response) {
      throw new NotFoundException(`Response with ID ${responseId} not found`);
    }
    
    return this.prisma.answer.findMany({
      where: { responseId },
      include: {
        question: true,
      },
    });
  }

  async findByQuestionId(questionId: string): Promise<Answer[]> {
    const question = await this.prisma.question.findUnique({
      where: { id: questionId },
    });
    
    if (!question) {
      throw new NotFoundException(`Question with ID ${questionId} not found`);
    }
    
    return this.prisma.answer.findMany({
      where: { questionId },
      include: {
        response: true,
      },
    });
  }

  async update(id: string, updateAnswerDto: UpdateAnswerDto): Promise<Answer> {
    const answer = await this.findOne(id);
    
    // Update the answer
    return this.prisma.answer.update({
      where: { id },
      data: {
        questionId: updateAnswerDto.questionId,
        content: updateAnswerDto.content,
      },
      include: {
        question: true,
        response: true,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const answer = await this.findOne(id);
    
    await this.prisma.answer.delete({
      where: { id },
    });
  }
}
