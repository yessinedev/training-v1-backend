import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ClerkService } from 'src/clerk/clerk.service';

@Injectable()
export class ParticipantService {
  constructor(private readonly prisma: PrismaService, private readonly clerkService: ClerkService) {}

  async findAll() {
    return this.prisma.participant.findMany({
      include: {
        actions: { include: { action: true } },
        attestations: true,
      },
    });
  }

  async createParticipantAndUser(
    createDto: CreateParticipantDto,
  ): Promise<any> {
    // 1. Validate role exists in your database
    const userRole = await this.prisma.role.findFirst({
      where: { role_name: "Participant" },
    });

    if (!userRole) {
      throw new BadRequestException('Role not found');
    }

    // 2. Create a Clerk invitation
    const clerkUser = await this.clerkService.createUser({
      email: createDto.email,
      role: {
        role_id: userRole.role_id,
        role_name: userRole.role_name,
      },
    });

    // Use the returned id from Clerk as the user_id
    const user_id = clerkUser.id;

    // 3. Create the user record in your database
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

    // 4. Create the participant record with relation to the user
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

  // Bulk creation: Accepts an array of DTOs and processes them one by one.
  async createManyParticipants(
    dtos: CreateParticipantDto[],
  ): Promise<any[]> {
    const results: any[] = [];
    for (const dto of dtos) {
      const participant = await this.createParticipantAndUser(dto);
      results.push(participant);
    }
    return results;
  }
}
