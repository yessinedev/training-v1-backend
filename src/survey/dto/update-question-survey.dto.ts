import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsJSON,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateQuestionWithinSurveyDto {
  @IsString()
  id: string; // Existing or new client-generated ID

  @IsString()
  text: string;

  @IsEnum(['text', 'multiple_choice', 'checkbox', 'rating', 'boolean']) // Match your QuestionType
  type: 'text' | 'multiple_choice' | 'checkbox' | 'rating' | 'boolean';

  @IsJSON()
  @IsOptional()
  options?: string[];

  @IsBoolean()
  required: boolean;
}
