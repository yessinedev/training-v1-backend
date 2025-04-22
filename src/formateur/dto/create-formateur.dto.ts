import { CreateUserDto } from 'src/user/dto/create-user.dto';

import { IsOptional, IsNumber } from 'class-validator';

export class CreateFormateurDto extends CreateUserDto {
  @IsOptional()
  @IsNumber()
  tarif_heure?: number;

  @IsOptional()
  @IsNumber()
  tarif_jour?: number;

  @IsOptional()
  @IsNumber()
  tarif_seance?: number;
}
