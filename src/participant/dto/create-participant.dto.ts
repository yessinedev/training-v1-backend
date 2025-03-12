import {
  IsEmail,
  IsNumber,
  isNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  @MinLength(1, { message: 'Last name is required' })
  @MaxLength(100)
  nom: string;

  @IsString()
  @MinLength(1, { message: 'First name is required' })
  @MaxLength(100)
  prenom: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString()
  telephone: string;

  @IsString()
  entreprise: string;

  @IsString()
  poste: string;
  @IsNumber()
  role_id: number;
}
