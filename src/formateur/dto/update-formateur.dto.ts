import { PartialType } from '@nestjs/mapped-types';
import { CreateFormateurDto } from './create-formateur.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFormateurDto extends PartialType(CreateFormateurDto) {
  @IsOptional()
  @IsString()
  cv_path?: string;

  @IsOptional()
  @IsString()
  badge_path?: string;
}
