import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FormationService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';

@Controller('formations')
export class FormationController {
  constructor(private readonly formationService: FormationService) {}

  @Get()
  async getAllFormations() {
    return this.formationService.getAll();
  }

  @Get(':formationId')
  async getFormation(@Param('formationId', ParseIntPipe) formationId: number) {
    return this.formationService.getById(formationId);
  }

  @Post()
  async createFormation(@Body() createFormationDto: CreateFormationDto) {
    return this.formationService.create(createFormationDto);
  }

  @Put(':id')
  async updateFormation(
    @Param('id', ParseIntPipe) action_id: number,
    @Body() updateFormationDto: UpdateFormationDto,
  ) {
    return this.formationService.update(action_id, updateFormationDto);
  }

  @Delete(':id')
  async deleteFormation(@Param('id', ParseIntPipe) action_id: number) {
    return this.formationService.delete(action_id);
  }
}
