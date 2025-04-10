import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserParticipantDto } from './dto/create-user-participant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClerkService } from 'src/clerk/clerk.service';
import { validateOrReject } from 'class-validator';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly clerkService: ClerkService,
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
    return await this.prisma.participant.create({
      data: createDto,
      include: {
        user: true,
      },
    });
  }

  async createParticipantAndUser(
    createDto: CreateUserParticipantDto,
  ): Promise<any> {
    const userRole = await this.prisma.role.findUnique({
      where: { role_id: createDto.role_id },
    });

    if (!userRole) {
      throw new BadRequestException('Role not found');
    }

    const clerkUser = await this.clerkService.createUser({
      email: createDto.email,
      role: {
        role_id: userRole.role_id,
        role_name: userRole.role_name,
      },
    });

    const user_id = clerkUser.id;

    await this.prisma.user.create({
      data: {
        user_id,
        email: createDto.email,
        nom: createDto.nom,
        prenom: createDto.prenom,
        telephone: createDto.telephone,
        role_id: userRole.role_id,
      },
    });

    const participant = await this.prisma.participant.create({
      data: {
        user_id,
        entreprise: createDto.entreprise,
        poste: createDto.poste,
      },
      include: {
        user: true,
      },
    });

    return participant;
  }

  async createManyParticipants(
    dtos: CreateUserParticipantDto[],
  ): Promise<{ successful: any[]; failed: any[] }> {
    const results = await Promise.allSettled(
      dtos.map((dto) => this.createParticipantAndUser(dto)),
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
    await validateOrReject(new UpdateParticipantDto(updateData));

    return await this.prisma.participant.update({
      where: { user_id: participantId },
      data: updateData,
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
