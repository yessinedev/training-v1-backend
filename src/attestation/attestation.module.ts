import { Module } from '@nestjs/common';
import { AttestationService } from './attestation.service';
import { AttestationController } from './attestation.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AttestationController],
  providers: [AttestationService, PrismaService],
})
export class AttestationModule {}
