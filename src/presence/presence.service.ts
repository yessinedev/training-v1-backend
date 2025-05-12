import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePresenceDto } from './dto/create-presence.dto';
import { UpdatePresenceDto } from './dto/update-presence.dto';

@Injectable()
export class PresenceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPresenceDto: CreatePresenceDto) {
    try {
      // Check if participant exists
      const participant = await this.prisma.participant.findUnique({
        where: { user_id: createPresenceDto.participant_id },
      });
      if (!participant) {
        throw new NotFoundException('Participant not found');
      }

      // Check if seance exists
      const seance = await this.prisma.seance.findUnique({
        where: { seance_id: createPresenceDto.seance_id },
      });
      if (!seance) {
        throw new NotFoundException('Seance not found');
      }

      // Optionally check formateur
      if (createPresenceDto.formateur_id) {
        const formateur = await this.prisma.formateur.findUnique({
          where: { user_id: createPresenceDto.formateur_id },
        });
        if (!formateur) {
          throw new NotFoundException('Formateur not found');
        }
      }

      // Create presence
      return await this.prisma.presence.create({
        data: {
          status: createPresenceDto.status ?? 'PRESENT',
          participant_id: createPresenceDto.participant_id,
          seance_id: createPresenceDto.seance_id,
          formateur_id: createPresenceDto.formateur_id,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Presence already exists for this participant and seance');
      }
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.presence.findMany({
        include: {
          participant: { include: { user: true } },
          seance: true,
          formateur: { include: { user: true } },
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to fetch presences');
    }
  }

  async findOne(id: number) {
    try {
      const presence = await this.prisma.presence.findUnique({
        where: { presence_id: id },
        include: {
          participant: { include: { user: true } },
          seance: true,
          formateur: { include: { user: true } },
        },
      });
      if (!presence) {
        throw new NotFoundException('Presence not found');
      }
      return presence;
    } catch (error) {
      throw error;
    }
  }

  findBySeanceId(seanceId: number) {
    return this.prisma.presence.findMany({
      where: { seance_id: seanceId },
      include: {
        participant: { include: { user: true } },
        seance: true,
        formateur: { include: { user: true } },
      },
    });
  }

  async update(id: number, updatePresenceDto: UpdatePresenceDto) {
    try {
      const presence = await this.prisma.presence.findUnique({
        where: { presence_id: id },
      });
      if (!presence) {
        throw new NotFoundException('Presence not found');
      }
      return await this.prisma.presence.update({
        where: { presence_id: id },
        data: updatePresenceDto,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const presence = await this.prisma.presence.findUnique({
        where: { presence_id: id },
      });
      if (!presence) {
        throw new NotFoundException('Presence not found');
      }
      await this.prisma.presence.delete({
        where: { presence_id: id },
      });
      return { message: 'Presence deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}
