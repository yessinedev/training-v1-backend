import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma/prisma.service";
import { CreateFormationDto } from "./dto/create-formation.dto";
import { UpdateFormationDto } from "./dto/update-formation.dto";

@Injectable()
export class FormationService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.actionFormation.findMany({
      include: {
        theme: { include: { domaine: true } },
        formateurs: { include: { formateur: { include: { user: true } } } },
      },
    });
  }

  async getById(formationId: number) {
    const formation = await this.prisma.actionFormation.findUnique({
      where: { action_id: formationId },
      include: {
        theme: {
          include: { domaine: true },
        },
        formateurs: {
          include: {
            formateur: {
              include: { user: true },
            },
          },
        },
        participants: {
          include: {
            participant: {
              include: {
                attestations: true,
                actions: true,
              },
            },
          },
        },
      },
    });

    if (!formation) {
      throw new NotFoundException("Formation not found");
    }

    return formation;
  }

  async create(data: CreateFormationDto) {
    return this.prisma.actionFormation.create({
      data: {
        ...data,
        date_debut: new Date(data.date_debut),
        date_fin: new Date(data.date_fin),
        formateurs: data.user_id ? { create: { formateur_id: data.user_id } } : undefined,
      },
      include: {
        theme: { include: { domaine: true } },
        formateurs: { include: { formateur: { include: { user: true } } } },
      },
    });
  }

  async update(id: number, data: UpdateFormationDto) {
    await this.prisma.actionFormationFormateur.deleteMany({ where: { action_id: id } });
    return this.prisma.actionFormation.update({
      where: { action_id: id },
      data: {
        ...data,
        date_debut: new Date(data.date_debut),
        date_fin: new Date(data.date_fin),
        formateurs: data.user_id ? { create: { formateur_id: data.user_id } } : undefined,
      },
      include: {
        theme: { include: { domaine: true } },
        formateurs: { include: { formateur: { include: { user: true } } } },
      },
    });
  }

  async delete(id: number) {
    await this.prisma.actionFormation.delete({ where: { action_id: id } });
    return { message: "Formation deleted successfully" };
  }
}
