import { Module } from '@nestjs/common';
import { AttestationService } from './attestation.service';
import { AttestationController } from './attestation.controller';

@Module({
  controllers: [AttestationController],
  providers: [AttestationService],
})
export class AttestationModule {}
