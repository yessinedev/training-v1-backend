import { Module } from '@nestjs/common';
import { ActionFpService } from './action-fp.service';
import { ActionFpController } from './action-fp.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ActionFpController],
  providers: [ActionFpService, PrismaService],
})
export class ActionFpModule {}
