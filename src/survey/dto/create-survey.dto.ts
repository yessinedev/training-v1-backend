import { IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateSurveyDto {
  @IsString()
  title: string;
  @IsString()
  createdById: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsEnum(['brouillon', 'publié', 'archivé'])
  @IsOptional()
  status?: 'brouillon' | 'publié' | 'archivé';
}
