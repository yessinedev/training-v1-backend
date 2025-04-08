import {
  IsInt,
  IsPositive,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateFormateurDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

}
