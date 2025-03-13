import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ActionFfService } from './action-ff.service';
import { ActionFfDto } from './dto/create-action-ff.dto';

@Controller("formations/:formationId/formateurs")
export class ActionFfController {
  constructor(private readonly actionFfService: ActionFfService) {}

  @Get()
  async findAll(@Param('formationId') formationId: string) {
    return await this.actionFfService.findAll(formationId);
  }

  @Post()
  async create(
    @Param('formationId') formationId: string,
    @Body() createActionFfDto: ActionFfDto,
  ) {
    return await this.actionFfService.create(formationId, createActionFfDto);
  }

  @Delete()
  async remove(
    @Param('formationId') formationId: string,
    @Query('formateurId') formateurId: string,
  ) {
    return await this.actionFfService.remove(formationId, formateurId);
  }
}
