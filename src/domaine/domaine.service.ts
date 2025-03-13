import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma/prisma.service";
import { CreateDomaineDto } from "./dto/create-domaine.dto";
import { UpdateDomaineDto } from "./dto/update-domaine.dto";

@Injectable()
export class DomaineService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.domaine.findMany({ include: { themes: true } });
  }

  async create(data: CreateDomaineDto) {
    return this.prisma.domaine.create({
      data,
      include: { themes: true },
    });
  }

  async update(domaineId: number, updateData: UpdateDomaineDto) {
    const domaine = await this.prisma.domaine.findUnique({ where: { domaine_id: domaineId } });

    if (!domaine) {
      throw new NotFoundException(`Domain with ID ${domaineId} not found`);
    }

    return this.prisma.domaine.update({
      where: { domaine_id: domaineId },
      data: updateData,
      include: { themes: true },
    });
  }

  async delete(domaineId: number) {
    const domaine = await this.prisma.domaine.findUnique({ where: { domaine_id: domaineId } });

    if (!domaine) {
      throw new NotFoundException(`Domain with ID ${domaineId} not found`);
    }

    return this.prisma.domaine.delete({ where: { domaine_id: domaineId } });
  }
}
