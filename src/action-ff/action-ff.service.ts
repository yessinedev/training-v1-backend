import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActionFfService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(formationId: string) {
    return await this.prisma.actionFormationFormateur.findMany({
      where: { action_id: parseInt(formationId) },
      include: {
        formateur: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async create(formationId: number, formateurId: string) {
    console.log(typeof formateurId);
    return await this.prisma.actionFormationFormateur.create({
      data: {
        action_id: formationId,
        formateur_id: formateurId,
      },
      include: {
        formateur: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async remove(formationId: string, formateurId: string) {
    const existing = await this.prisma.actionFormationFormateur.findUnique({
      where: {
        action_id_formateur_id: {
          action_id: parseInt(formationId),
          formateur_id: formateurId,
        },
      },
    });

    if (!existing) {
      throw new NotFoundException('Trainer not found');
    }

    await this.prisma.actionFormationFormateur.delete({
      where: {
        action_id_formateur_id: {
          action_id: parseInt(formationId),
          formateur_id: formateurId,
        },
      },
    });

    return { message: 'Trainer removed successfully' };
  }
}
