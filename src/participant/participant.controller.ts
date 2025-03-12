import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createParticipants(
    @Body() createDto: CreateParticipantDto | CreateParticipantDto[],
  ) {
    if (Array.isArray(createDto)) {
      const { successful, failed } =
        await this.participantService.createManyParticipants(createDto);
      return { successful, failed };
    } else {
      const participant =
        await this.participantService.createParticipantAndUser(createDto);
      return participant;
    }
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }
}
