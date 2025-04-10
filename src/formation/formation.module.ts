import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActionFfService } from 'src/action-ff/action-ff.service';

@Module({
  controllers: [FormationController],
  providers: [FormationService, PrismaService, ActionFfService],
})
export class FormationModule {}
