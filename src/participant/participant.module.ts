import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClerkService } from 'src/clerk/clerk.service';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService, PrismaService, ClerkService],
})
export class ParticipantModule {}
