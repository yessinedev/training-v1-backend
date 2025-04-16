import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileType, Formateur } from '@prisma/client';
import { FileService } from 'src/file/file.service';

@Injectable()
export class FormateurService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
    private fileService: FileService,
  ) {}

  async create(
    createDto: CreateFormateurDto,
    files: Express.Multer.File[],
  ): Promise<Formateur> {
    return this.prisma.$transaction(async (prismaTx) => {
      // First create the user and formateur
      const formateur = await prismaTx.formateur.create({
        data: {
          ...createDto,
        },
        include: { user: true },
      });

      // Process files in parallel
      const fileUploadPromises = files.map(async (file) => {
        const fileType = this.determineFileType(file.fieldname);
        const uploadPath = `formateurs/${fileType.toLowerCase()}/${
          formateur.user_id
        }`;

        const uploadedFile = await this.cloudinary.uploadFile(
          file.buffer,
          uploadPath,
          file.mimetype,
        );

        return {
          filePath: uploadedFile,
          type: fileType,
          formateurId: formateur.user_id,
          validated: fileType === FileType.BADGE ? false : true, // Example validation logic
        };
      });

      const fileParams = await Promise.all(fileUploadPromises);

      await this.fileService.createFilesTransactionally(fileParams, prismaTx);

      return formateur;
    });
  }

  private determineFileType(fieldname: string): FileType {
    const typeMap = {
      cv: FileType.CV,
      badge: FileType.BADGE,
      feuille_emargement: FileType.FEUILLE_EMARGEMENT,
    };

    return typeMap[fieldname.toLowerCase()] || FileType.CV;
  }

  async findAll() {
    return this.prisma.formateur.findMany({
      include: {
        user: { include: { role: true } },
        files: true,
        seances: true,
      },
    });
  }

  async update(id: string, updateFormateurDto: UpdateFormateurDto) {
    const existing = await this.prisma.formateur.findUnique({
      where: { user_id: id },
      include: { files: true },
    });

    if (!existing) {
      throw new NotFoundException(`Formateur with ID ${id} not found`);
    }

    return this.prisma.formateur.update({
      where: { user_id: id },
      data: updateFormateurDto,
      include: { user: { include: { role: true } } },
    });
  }

  async remove(id: string) {
    const formateur = await this.prisma.formateur.delete({
      where: { user_id: id },
    });

    const files = await this.fileService.findByFormateurId(id);
    files?.forEach(async (file) => {
      await this.cloudinary.deleteFile(file.file_path);
      await this.fileService.remove(file.file_id);
    });

    return formateur;
  }
}
