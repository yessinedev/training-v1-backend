import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';

@Injectable()
export class SeanceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSeanceDto: CreateSeanceDto) {
    return this.prisma.seance.create({ data: createSeanceDto });
  }

  async findAll() {
    return this.prisma.seance.findMany();
  }

  async findOne(id: number) {
    const seance = await this.prisma.seance.findUnique({ where: { seance_id: id } });
    if (!seance) throw new NotFoundException(`Seance with ID ${id} not found`);
    return seance;
  }

  async findByFormationId(formationId: number) {
    return this.prisma.seance.findMany({
      where: { action_id: formationId },
      orderBy: { date: 'asc' },
    });
  }

  async update(id: number, updateSeanceDto: UpdateSeanceDto) {
    return this.prisma.seance.update({
      where: { seance_id: id },
      data: updateSeanceDto,
    });
  }

  async remove(id: number) {
    return this.prisma.seance.delete({ where: { seance_id: id } });
  }
}
