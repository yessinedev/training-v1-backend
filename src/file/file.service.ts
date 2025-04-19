import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { File, Prisma } from '@prisma/client';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}

  async createFile(fileData: CreateFileDto): Promise<File> {
    return await this.prisma.file.create({
      data: {
        file_path: fileData.filePath,
        type: fileData.type,
        title: fileData.title,
        formateur_id: fileData.formateurId,
        action_id: fileData.actionId,
        validated: fileData.validated,
        validated_at: fileData.validated ? new Date() : null,
      },
    });
  }

  async createFilesTransactionally(
    files: CreateFileDto[],
    prismaTx?: Prisma.TransactionClient,
  ): Promise<File[]> {
    const client = prismaTx || this.prisma;
    return Promise.all(
      files.map((file) =>
        client.file.create({
          data: {
            file_path: file.filePath,
            type: file.type,
            title: file.title,
            formateur_id: file.formateurId,
            action_id: file.actionId,
            validated: file.validated,
            validated_at: file.validated ? new Date() : null,
          },
        }),
      ),
    );
  }

  async findAll() {
    return this.prisma.file.findMany();
  }

  async findOne(id: number) {
    return this.prisma.file.findUnique({
      where: { file_id: id },
    });
  }

  async findByFormateurId(formateurId: string) {
    return this.prisma.file.findMany({
      where: { formateur_id: formateurId },
    });
  }

  async update(id: number, updateFileDto: UpdateFileDto) {
    return this.prisma.file.update({
      where: { file_id: id },
      data: updateFileDto,
    });
  }

  async remove(id: number) {
    return this.prisma.file.delete({
      where: { file_id: id },
    });
  }
}
