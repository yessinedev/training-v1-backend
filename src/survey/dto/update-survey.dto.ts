import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveyDto } from './create-survey.dto';
import { UpdateQuestionWithinSurveyDto } from './update-question-survey.dto';
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSurveyDto extends PartialType(CreateSurveyDto) {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateQuestionWithinSurveyDto)
  @IsOptional()
  questions?: UpdateQuestionWithinSurveyDto[];

  @IsArray()
  @IsOptional()
  @Type(() => Number)
  action_ids?: number[]; 
}
