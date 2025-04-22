import { IsString } from 'class-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateParticipantDto extends CreateUserDto {
  @IsString()
  entreprise: string;

  @IsString()
  poste: string;
}
