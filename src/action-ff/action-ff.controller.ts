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
import { ActionFfDto } from './dto/create-action-ff.dto';

@Controller('formations/:formationId/formateurs')
export class ActionFfController {
  constructor(private readonly actionFfService: ActionFfService) {}

  @Get()
  async findAll(@Param('formationId') formationId: string) {
    return await this.actionFfService.findAll(formationId);
  }

  @Post()
  async create(
    @Param('formationId', ParseIntPipe) formationId: number,
    @Body() formateurId: string,
  ) {
    return await this.actionFfService.create(formationId, formateurId);
  }

  @Delete()
  async remove(
    @Param('formationId') formationId: string,
    @Query('formateurId') formateurId: string,
  ) {
    return await this.actionFfService.remove(formationId, formateurId);
  }
}
