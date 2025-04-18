import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Delete,
  Param,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateUserParticipantDto } from './dto/create-user-participant.dto';
import { CreateParticipantDto } from './dto/create-participant.dto';

@Controller('participants')
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

  @Post('create-user-participant')
  @HttpCode(HttpStatus.CREATED)
  async createUserParticipant(
    @Body() createDto: CreateUserParticipantDto,
  ) {
    return await this.participantService.createParticipantAndUser(createDto);
  }

  @Get()
  async findAll() {
    return await this.participantService.findAll();
  }

  @Delete(':id')
  async deleteParticipant(@Param ('id') id: string) {
    return await this.participantService.deleteParticipant(id);
  }

}
