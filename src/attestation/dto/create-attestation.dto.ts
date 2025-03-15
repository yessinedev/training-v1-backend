import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAttestationDto {
  @IsString()
  @IsNotEmpty()
  formationId: string;
}