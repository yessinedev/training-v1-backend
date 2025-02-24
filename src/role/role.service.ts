import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async getAllRoles() {
    return this.prisma.role.findMany({
      include: { users: true },
    });
  }

  async createRole(data: CreateRoleDto) {
    return this.prisma.role.create({ data });
  }

  async updateRole(role_id: number, data: CreateRoleDto) {
    const existingRole = await this.prisma.role.findUnique({
      where: { role_id },
    });

    if (!existingRole) {
      throw new NotFoundException('Role not found');
    }

    return this.prisma.role.update({
      where: { role_id },
      data,
    });
  }

  async deleteRole(role_id: number) {
    const existingRole = await this.prisma.role.findUnique({
      where: { role_id },
    });

    if (!existingRole) {
      throw new NotFoundException('Role not found');
    }

    return this.prisma.role.delete({ where: { role_id } });
  }
}
