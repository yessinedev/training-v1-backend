import { IsInt, IsPositive, IsOptional, IsString } from 'class-validator';

export class CreateFormateurDto {
  @IsInt()
  @IsPositive()
  user_id: string;

  @IsOptional()
  @IsString()
  cv_path?: string;

  @IsOptional()
  @IsString()
  badge_path?: string;
}
