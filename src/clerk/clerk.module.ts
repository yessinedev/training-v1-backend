import { Module } from '@nestjs/common';
import { ClerkService } from './clerk.service';
import { ClerkController } from './clerk.controller';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Module({
  controllers: [ClerkController],
  providers: [ClerkService, PrismaService],
})
export class ClerkModule {}
