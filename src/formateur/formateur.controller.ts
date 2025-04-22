import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FormateurService } from './formateur.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { UpdateFormateurDto } from './dto/update-formateur.dto';

@Controller('formateurs')
export class FormateurController {
  constructor(private readonly formateurService: FormateurService) {}

  @Get()
  async findAll() {
    return this.formateurService.findAll();
  }

  @Post()
  async create(@Body() createDto: CreateFormateurDto) {
    return this.formateurService.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateFormateurDto) {
    return this.formateurService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.formateurService.remove(id);
  }
}
