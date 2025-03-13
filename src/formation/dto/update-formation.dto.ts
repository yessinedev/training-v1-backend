import { CreateFormationDto } from './create-formation.dto';
import { IsInt, IsPositive } from 'class-validator';

export class UpdateFormationDto extends CreateFormationDto {
    @IsInt()
    @IsPositive()
    action_id: number;
  }