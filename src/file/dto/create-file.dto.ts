import { FileType } from '@prisma/client';

export class CreateFileDto {
  filePath: string;
  type: FileType;
  formateurId?: string;
  actionId?: number;
  validated?: boolean;
}
