import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SurveyService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateSurveyDto) {
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

  update(id: string, dto: UpdateSurveyDto) {
    return this.prisma.survey.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.survey.delete({ where: { id } });
  }
}
