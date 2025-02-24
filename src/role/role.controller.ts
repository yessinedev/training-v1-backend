import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async getAllRoles() {
    return this.roleService.getAllRoles();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))  // 🚀 Enables DTO validation
  async createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateRole(
    @Param('id', ParseIntPipe) role_id: number,
    @Body() updateRoleDto: CreateRoleDto,
  ) {
    return this.roleService.updateRole(role_id, updateRoleDto);
  }

  @Delete()
  async deleteRole(@Query('id', ParseIntPipe) role_id: number) {
    return this.roleService.deleteRole(role_id);
  }
}
