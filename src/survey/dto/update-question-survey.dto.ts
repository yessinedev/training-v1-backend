import {
  IsBoolean,
  IsEnum,
  IsJSON,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateQuestionWithinSurveyDto {
  @IsString()
  id: string;

  @IsString()
  text: string;

  @IsEnum(['text', 'multiple_choice', 'checkbox', 'rating', 'boolean'])
  type: 'text' | 'multiple_choice' | 'checkbox' | 'rating' | 'boolean';

  @IsJSON()
  @IsOptional()
  options?: string[];

  @IsBoolean()
  required: boolean;
}
