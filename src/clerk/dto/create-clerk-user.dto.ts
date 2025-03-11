import { IsString, IsNotEmpty, MaxLength, IsEmail } from 'class-validator';
import { Role } from 'src/role/dto/role.dto';

export class CreateClerkUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(255)
  email: string;

  role: Role;
}
