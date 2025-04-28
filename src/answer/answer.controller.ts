import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from '@prisma/client';

@Controller('answers')
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post(':responseId')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Param('responseId') responseId: string,
    @Body() createAnswerDto: CreateAnswerDto,
  ): Promise<Answer> {
    try {
      return await this.answerService.create(responseId, createAnswerDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Get()
  async findAll(): Promise<Answer[]> {
    return this.answerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Answer> {
    try {
      return await this.answerService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Get('response/:responseId')
  async findByResponseId(@Param('responseId') responseId: string): Promise<Answer[]> {
    try {
      return await this.answerService.findByResponseId(responseId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Get('question/:questionId')
  async findByQuestionId(@Param('questionId') questionId: string): Promise<Answer[]> {
    try {
      return await this.answerService.findByQuestionId(questionId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAnswerDto: UpdateAnswerDto,
  ): Promise<Answer> {
    try {
      return await this.answerService.update(id, updateAnswerDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.answerService.remove(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
