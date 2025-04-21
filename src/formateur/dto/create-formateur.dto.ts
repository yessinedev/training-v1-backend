import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateFormateurDto extends CreateUserDto {
  tarif_heure?: number;
  tarif_jour?: number;
  tarif_seance?: number;
}
