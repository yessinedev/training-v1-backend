import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileType, Formateur } from '@prisma/client';
import { FileService } from 'src/file/file.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FormateurService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
    private fileService: FileService,
    private userService: UserService,
  ) {}

  async create(
    createDto: CreateFormateurDto,
    files: Express.Multer.File[],
  ): Promise<Formateur> {
    // 1️⃣ Upload files to Cloudinary first (parallel)
    const uploadResults = await Promise.all(
      files.map((file) => {
        const fileType = this.determineFileType(file.fieldname);
        const uploadPath = `formateurs/${fileType}/tmp`;
        return this.cloudinary
          .uploadFile(file.buffer, uploadPath, file.mimetype)
          .then((url) => ({ url, fileType }));
      }),
    );

    // 2️⃣ Now perform the DB transaction quickly
    return this.prisma.$transaction(async (tx) => {
      const user = await this.userService.create({
        email: createDto.email,
        nom: createDto.nom,
        prenom: createDto.prenom,
        telephone: createDto.telephone,
        role_id: createDto.role_id,
      });

      const formateur = await tx.formateur.create({
        data: {
          user_id: user.user_id,
          tarif_heure: createDto.tarif_heure,
          tarif_jour: createDto.tarif_jour,
          tarif_seance: createDto.tarif_seance,
        },
        include: { user: true },
      });

      // 3️⃣ Create file records in the same transaction
      const fileCreateData = uploadResults.map(({ url, fileType }) => ({
        file_path: url,
        type: fileType,
        title: `${fileType}_${formateur.user.nom}_${formateur.user.prenom}`,
        formateur_id: formateur.user_id,
        validated: fileType !== FileType.BADGE,
      }));

      await tx.file.createMany({ data: fileCreateData });
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
