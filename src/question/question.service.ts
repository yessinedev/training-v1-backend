import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from '@prisma/client';

@Injectable()
export class QuestionService {
  constructor(private prisma: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    await this.prisma.survey.findUniqueOrThrow({
      where: { id: createQuestionDto.surveyId },
    });

    return this.prisma.question.create({
      data: {
        ...createQuestionDto,
        options: createQuestionDto.options
          ? JSON.parse(createQuestionDto.options)
          : undefined,
      },
    });
  }

  async findAll(): Promise<Question[]> {
    return this.prisma.question.findMany({
      include: { survey: true },
    });
  }

  async findOne(id: string): Promise<Question> {
    const question = await this.prisma.question.findUnique({
      where: { id },
      include: { survey: true },
    });
    if (!question) {
      throw new NotFoundException(`Question with ID ${id} not found`);
    }
    return question;
  }

  async findBySurveyId(surveyId: string): Promise<Question[]> {
    return this.prisma.question.findMany({
      where: { surveyId },
      include: { survey: true },
    });
  }

  async update(
    id: string,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<Question> {
    await this.findOne(id);

    if (updateQuestionDto.surveyId) {
      await this.prisma.survey.findUniqueOrThrow({
        where: { id: updateQuestionDto.surveyId },
      });
    }

    return this.prisma.question.update({
      where: { id },
      data: {
        ...updateQuestionDto,
        options: updateQuestionDto.options
          ? JSON.parse(updateQuestionDto.options)
          : undefined,
      },
    });
  }

  async remove(id: string): Promise<Question> {
    await this.findOne(id);
    return this.prisma.question.delete({
      where: { id },
    });
  }
}
