import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClerkAuthGuard } from 'src/guards/clerk.guard';
import { Roles } from 'src/decorators/role.decorator';
import { RolesGuard } from 'src/guards/role.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @UseGuards(ClerkAuthGuard, RolesGuard)
  @Roles('ADMIN', 'GESTIONNAIRE')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('all')
  @UseGuards(ClerkAuthGuard, RolesGuard)
  @Roles('ADMIN', 'GESTIONNAIRE')
  async findAll(@Query('roleId') roleId?: string) {
    return await this.userService.findAll(roleId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
