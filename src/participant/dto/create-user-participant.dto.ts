import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateUserParticipantDto extends CreateUserDto {
  @IsString()
  entreprise: string;

  @IsString()
  poste: string;

  @IsNumber()
  role_id: number;
}
