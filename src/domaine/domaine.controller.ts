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
import { DomaineService } from './domaine.service';
import { CreateDomaineDto } from './dto/create-domaine.dto';
import { UpdateDomaineDto } from './dto/update-domaine.dto';

@Controller('domaines')
export class DomaineController {
  constructor(private readonly domaineService: DomaineService) {}

  @Get()
  async getAll() {
    return this.domaineService.findAll();
  }

  @Post()
  async create(@Body() createDomaineDto: CreateDomaineDto) {
    return this.domaineService.create(createDomaineDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) domaineId: number,
    @Body() updateDomaineDto: UpdateDomaineDto,
  ) {
    return this.domaineService.update(domaineId, updateDomaineDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) domaineId: number) {
    return this.domaineService.delete(domaineId);
  }
}
