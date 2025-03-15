import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { AttestationService } from './attestation.service';

@Controller('attestation')
export class AttestationController {
  constructor(private readonly attestationService: AttestationService) {}

  @Get(':formationId')
  async findAll(@Param('formationId', ParseIntPipe) formationId: number) {
    return await this.attestationService.findAll(formationId);
  }

  @Post(':formationId')
  async create(@Param('formationId', ParseIntPipe) formationId: number) {
    return await this.attestationService.create(formationId);
  }
}