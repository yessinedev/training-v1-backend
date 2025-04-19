import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsJSON,
  IsEnum,
  IsNumber,
} from 'class-validator';


export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  type: string; 

  @IsOptional()
  @IsJSON() 
  options?: string;
  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsNumber()
  order: number; // Order of the question in the survey

  @IsString()
  @IsNotEmpty()
  surveyId: string;
}
