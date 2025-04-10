import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AddParticipantDto,
  UpdateParticipantStatusDto,
} from './dto/action-fp.dto';

@Injectable()
export class ActionFpService {
  constructor(private readonly prisma: PrismaService) {}

  // Fetch all participants for a formation
  async getParticipants(formationId: number) {
    const participants = await this.prisma.actionFormationParticipant.findMany({
      where: { action_id: formationId },
      include: {
        participant: {
          include: { user: true},
        },
        action: true,
        
      },
    });

    return participants;
  }

  // Update a participant's status
  async updateParticipantStatus(
    formationId: number,
    dto: UpdateParticipantStatusDto,
  ) {
    try {
      const updatedParticipant =
        await this.prisma.actionFormationParticipant.update({
          where: {
            action_id_participant_id: {
              action_id: formationId,
              participant_id: dto.participant_id,
            },
          },
          data: { statut: dto.statut },
          include: { participant: true, action: true },
        });

      return updatedParticipant;
    } catch (error) {
      throw new NotFoundException('Participant not found or update failed.');
    }
  }

  // Add participants to a formation
  async addParticipants(
    formationId: number,
    participants: AddParticipantDto | AddParticipantDto[],
  ) {
    const participantsArray = Array.isArray(participants)
      ? participants
      : [participants];

    if (participantsArray.length === 1) {
      return this.prisma.actionFormationParticipant.create({
        data: {
          action_id: formationId,
          participant_id: participantsArray[0].participant_id,
          date_inscription: new Date(),
          statut: participantsArray[0].statut,
        },
        include: { participant: true, action: true },
      });
    }

    const createdParticipants =
      await this.prisma.actionFormationParticipant.createMany({
        data: participantsArray.map((p) => ({
          action_id: formationId,
          participant_id: p.participant_id,
          date_inscription: new Date(),
          statut: p.statut,
        })),
        skipDuplicates: true,
      });

    return {
      message: 'Participants added successfully',
      count: createdParticipants.count,
    };
  }

  // Remove a participant from a formation
  async removeParticipant(formationId: number, participantId: string) {
    try {
      await this.prisma.actionFormationParticipant.delete({
        where: {
          action_id_participant_id: {
            action_id: formationId,
            participant_id: participantId,
          },
        },
      });

      return { message: 'Participant removed successfully' };
    } catch (error) {
      throw new NotFoundException('Failed to remove participant');
    }
  }
}
