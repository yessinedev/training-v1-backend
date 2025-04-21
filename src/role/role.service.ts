import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async getAllRoles() {
    try {
      return this.prisma.role.findMany({
        include: { users: true },
      });
    } catch (error) {
      throw new NotFoundException(
        'Un erreur est survenu lors de la récupération des rôles',
      );
    }
  }

  async createRole(data: CreateRoleDto) {
    try {
      return this.prisma.role.create({ data });
    } catch (error) {
      throw new NotFoundException(
        'Un erreur est survenu lors de la création du rôle',
      );
    }
  }

  async updateRole(role_id: number, data: CreateRoleDto) {
    try {
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
    } catch (error) {
      throw new NotFoundException(
        'Un erreur est survenu lors de la mise à jour du rôle',
      );
    }
  }

  async deleteRole(role_id: number) {
    try {
      const existingRole = await this.prisma.role.findUnique({
        where: { role_id },
      });

      if (!existingRole) {
        throw new NotFoundException('Role not found');
      }

      return this.prisma.role.delete({ where: { role_id } });
    } catch (error) {
      throw new NotFoundException(
        'Un erreur est survenu lors de la suppression du rôle',
      );
    }
  }
}
