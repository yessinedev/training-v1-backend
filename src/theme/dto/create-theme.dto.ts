import {
  IsInt,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateThemeDto {
  @IsString()
  @MinLength(1, { message: 'Theme name is required' })
  @MaxLength(100, { message: 'Theme name must be less than 100 characters' })
  libelle_theme: string;

  @IsInt()
  @IsPositive({ message: 'Domain ID must be a positive number' })
  domaine_id: number;
}
