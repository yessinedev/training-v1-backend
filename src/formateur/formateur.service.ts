import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Formateur } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FormateurService {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {}

  async create(createDto: CreateFormateurDto): Promise<Formateur> {
    try {
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

        return formateur;
      });
    } catch (error) {
      throw new BadRequestException('Error creating formateur');
    }
  }

  async findAll() {
    return this.prisma.formateur.findMany({
      include: {
        user: { include: { role: true } },
        seances: true,
      },
    });
  }

  // formateur.service.ts

  async update(id: string, dto: UpdateFormateurDto) {
    const existing = await this.prisma.formateur.findUnique({
      where: { user_id: id },
    });
    if (!existing) {
      throw new NotFoundException(`Formateur with ID ${id} not found`);
    }

    return this.prisma.formateur.update({
      where: { user_id: id },
      data: {
        tarif_heure: dto.tarif_heure,
        tarif_jour: dto.tarif_jour,
        tarif_seance: dto.tarif_seance,

        user: {
          update: {
            nom: dto.nom,
            prenom: dto.prenom,
            email: dto.email,
            telephone: dto.telephone,
            role_id: dto.role_id,
          },
        },
      },
      include: {
        user: {
          include: { role: true },
        },
      },
    });
  }

  async remove(id: string) {
    try {
      const formateur = await this.prisma.formateur.delete({
        where: { user_id: id },
      });

      return formateur;
    } catch (error) {
      throw new BadRequestException('Error deleting formateur');
    }
  }
}
