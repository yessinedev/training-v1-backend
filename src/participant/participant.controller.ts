import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateUserParticipantDto } from './dto/create-user-participant.dto';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createParticipants(
    @Body() createDto: CreateParticipantDto | CreateUserParticipantDto[],
  ) {
    if (Array.isArray(createDto)) {
      const { successful, failed } =
        await this.participantService.createManyParticipants(createDto);
      return { successful, failed };
    } else {
      const participant =
        await this.participantService.createParticipant(createDto);
      return participant;
    }
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }
}
