import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  @IsNotEmpty()
  questionId: string;

  @IsObject()
  @IsNotEmpty()
  content: Record<string, any>;
}