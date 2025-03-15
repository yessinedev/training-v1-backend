import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { ActionFfService } from 'src/action-ff/action-ff.service';

@Injectable()
export class FormationService {
  constructor(private prisma: PrismaService, private actionFfService: ActionFfService) {}

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
      throw new NotFoundException('Formation not found');
    }

    return formation;
  }

  async create(data: CreateFormationDto) {
    const { user_id, ...formationData } = data; // Extract user_id to avoid passing it to ActionFormation
  
    const actionFormation = await this.prisma.actionFormation.create({
      data: {
        ...formationData,
        date_debut: new Date(data.date_debut),
        date_fin: new Date(data.date_fin),
      },
      include: {
        theme: { include: { domaine: true } },
        formateurs: { include: { formateur: { include: { user: true } } } },
      },
    });
  
    // If a formateur (user_id) is provided, create the relation
    if (user_id) {
      await this.prisma.actionFormationFormateur.create({
        data: {
          action_id: actionFormation.action_id,
          formateur_id: user_id,
        },
      });
    }
  
    return actionFormation;
  }
  

  async update(id: number, data: UpdateFormationDto) {
    await this.prisma.actionFormationFormateur.deleteMany({
      where: { action_id: id },
    });
    return this.prisma.actionFormation.update({
      where: { action_id: id },
      data: {
        ...data,
        date_debut: new Date(data.date_debut),
        date_fin: new Date(data.date_fin),
      },
      include: {
        theme: { include: { domaine: true } },
        formateurs: { include: { formateur: { include: { user: true } } } },
      },
    });
  }

  async delete(id: number) {
    await this.prisma.actionFormation.delete({ where: { action_id: id } });
    return { message: 'Formation deleted successfully' };
  }
}
