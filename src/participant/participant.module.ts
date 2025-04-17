import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { ClerkService } from 'src/clerk/clerk.service';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService, ClerkService],
})
export class ParticipantModule {}
