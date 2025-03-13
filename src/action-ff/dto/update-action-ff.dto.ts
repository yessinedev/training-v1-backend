import { PartialType } from '@nestjs/mapped-types';
import { CreateActionFfDto } from './create-action-ff.dto';

export class UpdateActionFfDto extends PartialType(CreateActionFfDto) {}
