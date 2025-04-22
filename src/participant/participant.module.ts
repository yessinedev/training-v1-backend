import { Module } from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { ParticipantController } from './participant.controller';
import { ClerkService } from 'src/clerk/clerk.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [ParticipantController],
  providers: [ParticipantService, ClerkService, UserService],
})
export class ParticipantModule {}
