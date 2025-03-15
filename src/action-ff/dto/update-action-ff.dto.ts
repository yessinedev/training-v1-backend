import { PartialType } from '@nestjs/mapped-types';
import { ActionFfDto } from './create-action-ff.dto';

export class UpdateActionFfDto extends PartialType(ActionFfDto) {}
