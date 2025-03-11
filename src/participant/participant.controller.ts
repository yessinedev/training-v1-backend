import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('create')
  create(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantService.createParticipantAndUser(
      createParticipantDto,
    );
  }

  @Post('create/many')
  createMany(@Body() createParticipantDto: CreateParticipantDto[]) {
    return this.participantService.createManyParticipants(createParticipantDto);
  }

  @Get()
  findAll() {
    return this.participantService.findAll();
  }
}
