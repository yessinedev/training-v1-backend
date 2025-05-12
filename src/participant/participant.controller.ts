import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';

@Controller('participants')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async createParticipants(@Body() createDto: CreateParticipantDto) {
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
  async findAll() {
    return await this.participantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.participantService.findOne(id);
  }

  @Put(':id')
  async updateParticipant(
    @Param('id') id: string,
    @Body() updateParticipantDto: UpdateParticipantDto,
  ) {
    return await this.participantService.updateParticipant(
      id,
      updateParticipantDto,
    );
  }

  @Delete(':id')
  async deleteParticipant(@Param('id') id: string) {
    return await this.participantService.deleteParticipant(id);
  }
}
