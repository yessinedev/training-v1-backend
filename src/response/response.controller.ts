import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { ResponseService } from './response.service';
import { CreateResponseDto } from './dto/create-response.dto';
import { UpdateResponseDto } from './dto/update-response.dto';
import { Response } from '@prisma/client';

@Controller('responses')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createResponseDto: CreateResponseDto): Promise<Response> {
    try {
      return await this.responseService.create(createResponseDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Get()
  async findAll(): Promise<Response[]> {
    return this.responseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Response> {
    try {
      return await this.responseService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Get('survey/:surveyId')
  async findBySurveyId(@Param('surveyId') surveyId: string): Promise<Response[]> {
    try {
      return await this.responseService.findBySurveyId(surveyId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Get('participant/:participantId')
  async findByParticipantId(@Param('participantId') participantId: string): Promise<Response[]> {
    try {
      return await this.responseService.findByParticipantId(participantId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateResponseDto: UpdateResponseDto): Promise<Response> {
    try {
      return await this.responseService.update(id, updateResponseDto);
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
      await this.responseService.remove(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
