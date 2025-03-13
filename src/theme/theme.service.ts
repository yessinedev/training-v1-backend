import { PrismaService } from "src/prisma/prisma/prisma.service";
import { CreateThemeDto } from "./dto/create-theme.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateThemeDto } from "./dto/update-theme.dto";

@Injectable()
export class ThemeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.theme.findMany({ include: { domaine: true } });
  }

  async create(data: CreateThemeDto) {
    return this.prisma.theme.create({
      data,
      include: { domaine: true },
    });
  }

  async update(themeId: number, updateData: UpdateThemeDto) {
    const theme = await this.prisma.theme.findUnique({ where: { theme_id: themeId } });

    if (!theme) {
      throw new NotFoundException(`Theme with ID ${themeId} not found`);
    }

    return this.prisma.theme.update({
      where: { theme_id: themeId },
      data: updateData,
      include: { domaine: true },
    });
  }

  async delete(themeId: number) {
    const theme = await this.prisma.theme.findUnique({ where: { theme_id: themeId } });

    if (!theme) {
      throw new NotFoundException(`Theme with ID ${themeId} not found`);
    }

    return this.prisma.theme.delete({ where: { theme_id: themeId } });
  }
}