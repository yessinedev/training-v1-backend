import { IsNotEmpty, IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';

export class CreatePresenceDto {
  @IsString()
  @IsNotEmpty()
  participant_id: string;

  @IsNumber()
  @IsNotEmpty()
  seance_id: number;

  @IsString()
  @IsOptional()
  formateur_id?: string;

  @IsEnum(['PRESENT', 'ABSENT'])
  @IsOptional()
  status?: 'PRESENT' | 'ABSENT';
}
