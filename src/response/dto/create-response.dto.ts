import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { CreateAnswerDto } from '../../answer/dto/create-answer.dto';

export class CreateResponseDto {
  @IsString()
  @IsNotEmpty()
  surveyId: string;

  @IsString()
  @IsOptional()
  participantId?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];
}