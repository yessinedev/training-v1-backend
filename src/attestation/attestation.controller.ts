import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { AttestationService } from './attestation.service';

@Controller('formations/:formationId/attestations')
export class AttestationController {
  constructor(private readonly attestationService: AttestationService) {}

  @Get()
  async findAll(@Param('formationId', ParseIntPipe) formationId: number) {
    return await this.attestationService.findAll(formationId);
  }

  @Post()
  async create(@Param('formationId', ParseIntPipe) formationId: number) {
    return await this.attestationService.create(formationId);
  }
}