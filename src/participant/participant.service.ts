import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ParticipantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async findAll() {
    return this.prisma.participant.findMany({
      include: {
        actions: { include: { action: true } },
        attestations: true,
        user: true,
      },
    });
  }

  async createParticipant(createDto: CreateParticipantDto) {
    try {
      return await this.prisma.$transaction(async (tx) => {
        const user = await this.userService.create({
          email: createDto.email,
          nom: createDto.nom,
          prenom: createDto.prenom,
          telephone: createDto.telephone,
          role_id: createDto.role_id,
        });

        const participant = await tx.participant.create({
          data: {
            user_id: user.user_id,
            entreprise: createDto.entreprise,
            poste: createDto.poste,
          },
          include: { user: true },
        });

        return participant;
      });
    } catch (error) {
      throw new BadRequestException('Error creating participant');
    }
  }

  async findOne(participantId: string) {
    const participant = await this.prisma.participant.findUnique({
      where: { user_id: participantId },
      include: {
        actions: {
          include: {
            action: {
              include: {
                theme: {
                  include: { domaine: true },
                },
                seances: true
              },
              
            },
          },
        },
        attestations: {
          include: {
            action: {
              include: {
                theme: {
                  include: { domaine: true },
                },
                seances: true,
              },
            },
          },
        },
        user: true,
        presences: {
          include: {
            seance: true,
          }
        },
      },
    });

    if (!participant) {
      throw new BadRequestException('Participant not found');
    }

    return participant;
  }

  async createManyParticipants(
    dtos: CreateParticipantDto[],
  ): Promise<{ successful: any[]; failed: any[] }> {
    const results = await Promise.allSettled(
      dtos.map((dto) => this.createParticipant(dto)),
    );

    const successful = results
      .filter((r): r is PromiseFulfilledResult<any> => r.status === 'fulfilled')
      .map((r) => r.value);
    const failed = results
      .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
      .map((r) => ({ error: r.reason, dto: dtos[results.indexOf(r)] }));

    return { successful, failed };
  }

  async updateParticipant(
    participantId: string,
    updateData: UpdateParticipantDto,
  ) {
    return await this.prisma.participant.update({
      where: { user_id: participantId },
      data: {
        entreprise: updateData.entreprise,
        poste: updateData.poste,
        user: {
          update: {
            nom: updateData.nom,
            prenom: updateData.prenom,
            email: updateData.email,
            telephone: updateData.telephone,
            role_id: updateData.role_id,
          },
        },
      },
      include: {
        actions: { include: { action: true } },
        attestations: true,
      },
    });
  }

  async deleteParticipant(participantId: string) {
    return await this.prisma.participant.delete({
      where: { user_id: participantId },
    });
  }
}
