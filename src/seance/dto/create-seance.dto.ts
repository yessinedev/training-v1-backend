import {
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { SeanceStatut } from '@prisma/client';

export class CreateSeanceDto {
  @IsInt()
  action_id: number;

  @IsDateString()
  @IsOptional()
  date?: Date;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  heure?: string;

  @IsInt()
  @IsOptional()
  duree_heures?: number;

  @IsEnum(SeanceStatut)
  @IsOptional()
  statut?: SeanceStatut;

  @IsString()
  formateur_id?: string;
}
