import { FileType } from '@prisma/client';

export class CreateFileDto {
  filePath: string;
  type: FileType;
  title: string;
  formateurId?: string;
  actionId?: number;
  validated?: boolean;
}
