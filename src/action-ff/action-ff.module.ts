import { Module } from '@nestjs/common';
import { ActionFfService } from './action-ff.service';
import { ActionFfController } from './action-ff.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ActionFfController],
  providers: [ActionFfService, PrismaService],
})
export class ActionFfModule {}
