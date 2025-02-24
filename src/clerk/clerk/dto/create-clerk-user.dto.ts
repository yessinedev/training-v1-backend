import { IsString, IsNotEmpty, MaxLength, IsEmail, IsOptional, IsInt, Min } from 'class-validator';
import { Role } from 'src/role/dto/role.dto';

export class CreateClerkUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;

  
  role: Role
}