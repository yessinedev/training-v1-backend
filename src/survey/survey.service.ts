import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Survey } from '@prisma/client';

@Injectable()
export class SurveyService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSurveyDto) {
    console.log('Creating survey with data:', dto);
    return this.prisma.survey.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.survey.findMany({
      include: { questions: true, responses: true },
    });
  }

  async findOne(id: string) {
    const survey = await this.prisma.survey.findUnique({
      where: { id },
      include: { questions: true, responses: { include: { answers: true } } },
    });
    if (!survey) throw new NotFoundException(`Survey ${id} not found`);
    return survey;
  }

  async update(id: string, dto: UpdateSurveyDto): Promise<Survey> {
    // Ensure the survey exists first
    const existingSurvey = await this.prisma.survey.findUnique({
      where: { id },
    });
    if (!existingSurvey) {
      throw new NotFoundException(`Survey with ID ${id} not found`);
    }

    try {
      const updatedSurvey = await this.prisma.$transaction(async (tx) => {
        // 1. Update survey's own fields (if provided in dto)
        const surveyUpdateData: Partial<Survey> = {};
        if (dto.title !== undefined) surveyUpdateData.title = dto.title;
        if (dto.description !== undefined)
          surveyUpdateData.description = dto.description;
        if (dto.status !== undefined) surveyUpdateData.status = dto.status;
        // Add other updatable survey fields if necessary

        if (Object.keys(surveyUpdateData).length > 0) {
          await tx.survey.update({
            where: { id },
            data: surveyUpdateData,
          });
        }

        // 2. Handle questions ONLY if the 'questions' array is present in the DTO
        if (dto.questions) {
          const incomingQuestions = dto.questions;

          // Get current question IDs from DB
          const existingDbQuestions = await tx.question.findMany({
            where: { surveyId: id },
            select: { id: true },
          });
          const existingDbQuestionIds = new Set(
            existingDbQuestions.map((q) => q.id),
          );
          const incomingQuestionIds = new Set(
            incomingQuestions.map((q) => q.id),
          );

          // Identify questions to delete
          const questionsToDelete = existingDbQuestions.filter(
            (q) => !incomingQuestionIds.has(q.id),
          );
          if (questionsToDelete.length > 0) {
            await tx.question.deleteMany({
              where: { id: { in: questionsToDelete.map((q) => q.id) } },
            });
          }

          // Upsert (Update existing or Create new) questions
          for (const [index, questionDto] of incomingQuestions.entries()) {
            const questionData = {
              text: questionDto.text,
              type: questionDto.type,
              required: questionDto.required,
              options: questionDto.options,
              order: index, // Set order based on array index
              surveyId: id, // Ensure association
            };

            if (existingDbQuestionIds.has(questionDto.id)) {
              // Update existing
              await tx.question.update({
                where: { id: questionDto.id },
                data: questionData,
              });
            } else {
              // Create new (using client-provided ID)
              await tx.question.create({
                data: {
                  ...questionData,
                },
              });
            }
          }
        } // End of question handling block

        // Re-fetch the survey with updated questions to return the final state
        return tx.survey.findUniqueOrThrow({
          where: { id },
          include: { questions: { orderBy: { order: 'asc' } } }, // Include ordered questions
        });
      });

      return updatedSurvey;
    } catch (error) {
      console.error('Error during survey update:', error);
      throw new Error('Failed to update survey');
    }
    // Use a transaction for atomic updates
  } // End of update method

  remove(id: string) {
    return this.prisma.survey.delete({ where: { id } });
  }
}
