import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttestationService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(formationId: number) {
    return await this.prisma.attestation.findMany({
      where: { action_id: formationId },
      include: {
        participant: {
          include: { user: true}
        },
        action: { include: { theme: true } },
      },
      orderBy: { date_emission: 'desc' },
    });
  }

  async create(formationId: number) {
    const participants = await this.prisma.actionFormationParticipant.findMany({
      where: {
        action_id: formationId,
        statut: 'Confirmé',
        NOT: {
          participant: {
            attestations: { some: { action_id: formationId } },
          },
        },
      },
      include: { participant: true },
    });

    const attestations = await Promise.all(
      participants.map(async (participant) => {
        return this.prisma.attestation.create({
          data: {
            participant_id: participant.participant_id,
            action_id: formationId,
            date_emission: new Date(),
            qr_code_ref: `ATT-${formationId}-${participant.participant_id}-${Date.now()}`,
          },
          include: { participant: true, action: true },
        });
      }),
    );

    return attestations;
  }
}
