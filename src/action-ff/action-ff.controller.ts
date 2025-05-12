import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ActionFfService } from './action-ff.service';

@Controller('aff')
export class ActionFfController {
  constructor(private readonly actionFfService: ActionFfService) {}

  @Get('formation/:formationId')
  async findAll(@Param('formationId') formationId: string) {
    return await this.actionFfService.findAll(formationId);
  }
  @Get('formation/:formationId/formateurs')
  async fetchFormateursByFormationId(formationId: string) {
    return await this.actionFfService.fetchFormateursByFormationId(formationId);
  }

  @Get('formateur/:formateurId')
  async fetchFormationsByFormateurId(
    @Param('formateurId') formateurId: string,
  ) {
    return await this.actionFfService.fetchFormationsByFormateurId(formateurId);
  }

  @Post(':formationId')
  async create(
    @Param('formationId', ParseIntPipe) formationId: number,
    @Body('formateurId') formateurId: string,
  ) {
    return await this.actionFfService.create(formationId, formateurId);
  }

  @Delete(':formationId')
  async remove(
    @Param('formationId') formationId: string,
    @Query('formateurId') formateurId: string,
  ) {
    return await this.actionFfService.remove(formationId, formateurId);
  }
}
