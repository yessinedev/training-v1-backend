import { IsNotEmpty, IsString } from 'class-validator';

export class ActionFfDto {
  @IsString()
  @IsNotEmpty()
  formateur_id: string;
}
