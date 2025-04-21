import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nom: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  prenom: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  telephone: string;
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  role_id: number;
}
