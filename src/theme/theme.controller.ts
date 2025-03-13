import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Controller("themes")
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Get()
  async getAll() {
    return this.themeService.findAll();
  }

  @Post()
  async create(@Body() createThemeDto: CreateThemeDto) {
    return this.themeService.create(createThemeDto);
  }

  @Put(":id")
  async update(@Param("id", ParseIntPipe) themeId: number, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeService.update(themeId, updateThemeDto);
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) themeId: number) {
    return this.themeService.delete(themeId);
  }
}
