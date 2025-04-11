import {
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  user_id: string;

  @IsString()
  entreprise: string;

  @IsString()
  poste: string;

}
