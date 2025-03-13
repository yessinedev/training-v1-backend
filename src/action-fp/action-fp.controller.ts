import { Controller, Get, Param, ParseIntPipe, Put, Body, Post, Delete, Query } from "@nestjs/common";
import { ActionFpService } from "./action-fp.service";
import { AddParticipantDto, UpdateParticipantStatusDto } from "./dto/action-fp.dto";

@Controller("formations/:formationId/participants")
export class ActionFpController {
  constructor(private readonly actionFpService: ActionFpService) {}

  @Get()
  async getParticipants(@Param("formationId", ParseIntPipe) formationId: number) {
    return this.actionFpService.getParticipants(formationId);
  }

  @Put()
  async updateParticipantStatus(
    @Param("formationId", ParseIntPipe) formationId: number,
    @Body() updateDto: UpdateParticipantStatusDto
  ) {
    return this.actionFpService.updateParticipantStatus(formationId, updateDto);
  }

  @Post()
  async addParticipants(
    @Param("formationId", ParseIntPipe) formationId: number,
    @Body() addDto: AddParticipantDto | AddParticipantDto[]
  ) {
    return this.actionFpService.addParticipants(formationId, addDto);
  }

  @Delete()
  async removeParticipant(
    @Param("formationId", ParseIntPipe) formationId: number,
    @Query("participantId") participantId: string
  ) {
    return this.actionFpService.removeParticipant(formationId, participantId);
  }
}
