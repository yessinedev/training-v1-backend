import { Module } from '@nestjs/common';
import { SeanceService } from './seance.service';
import { SeanceController } from './seance.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SeanceController],
  providers: [SeanceService, PrismaService],
})
export class SeanceModule {}
