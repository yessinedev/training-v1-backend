import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFormateurDto {
  @IsNotEmpty()
  @IsString()
  user_id: string;

  tarif_heure?: number;
  tarif_jour?: number;
  tarif_seance?: number;
}
