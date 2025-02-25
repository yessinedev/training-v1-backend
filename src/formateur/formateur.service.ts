import { Injectable, NotFoundException } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class FormateurService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  async create(createFormateurDto: CreateFormateurDto) {
    return this.prisma.formateur.create({
      data: createFormateurDto,
      include: { user: { include: { role: true } } },
    });
  }

  async findAll() {
    return this.prisma.formateur.findMany({
      include: { user: { include: { role: true } } },
    });
  }

  async update(id: string, updateFormateurDto: UpdateFormateurDto) {
    const existing = await this.prisma.formateur.findUnique({
      where: { user_id: id },
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

    if (formateur.cv_path) {
      await this.cloudinary.deleteFile(formateur.cv_path);
    }

    if (formateur.badge_path) {
      await this.cloudinary.deleteFile(formateur.badge_path);
    }

    return formateur;
  }
}
