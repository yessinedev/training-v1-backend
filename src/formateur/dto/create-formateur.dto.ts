import { IsInt, IsPositive, IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateFormateurDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  cv_path?: string;

  @IsOptional()
  @IsString()
  badge_path?: string;
}
