import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveyDto } from './create-survey.dto';
import { UpdateQuestionWithinSurveyDto } from './update-question-survey.dto';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSurveyDto extends PartialType(CreateSurveyDto) {
  @IsArray()
  @ValidateNested({ each: true }) // Validate each object in the array
  @Type(() => UpdateQuestionWithinSurveyDto) // Specify the type for validation
  @IsOptional()
  questions?: UpdateQuestionWithinSurveyDto[];
}
