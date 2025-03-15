import { IsInt, IsOptional, IsPositive, IsString, MinLength, MaxLength, IsDateString } from 'class-validator';

export class CreateFormationDto {
  @IsString()
  @MinLength(1)
  type_action: string;

  @IsInt()
  @IsPositive()
  theme_id: number;

  @IsDateString()
  date_debut: string;

  @IsDateString()
  date_fin: string;

  @IsInt()
  @IsPositive()
  duree_jours: number;

  @IsInt()
  @IsPositive()
  duree_heures: number;

  @IsString()
  @MinLength(1)
  lieu: string;

  @IsInt()
  @IsPositive()
  nb_participants_prevu: number;

  @IsString()
  @IsOptional()
  user_id?: string;
}


