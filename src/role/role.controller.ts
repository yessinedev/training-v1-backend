import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ClerkAuthGuard } from 'src/guards/clerk.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/role.decorator';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  @UseGuards(ClerkAuthGuard, RolesGuard)
  @Roles('ADMIN', 'GESTIONNAIRE')
  async getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @Post()
  @UseGuards(ClerkAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @Put(':id')
  @UseGuards(ClerkAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async updateRole(
    @Param('id', ParseIntPipe) role_id: number,
    @Body() updateRoleDto: CreateRoleDto,
  ) {
    return this.roleService.updateRole(role_id, updateRoleDto);
  }

  @Delete(':id')
  @UseGuards(ClerkAuthGuard, RolesGuard)
  @Roles('ADMIN')
  async deleteRole(@Param('id', ParseIntPipe) role_id: number) {
    return this.roleService.deleteRole(role_id);
  }
}
