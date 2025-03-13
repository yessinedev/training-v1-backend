import { IsEnum, IsInt, IsOptional, IsPositive } from "class-validator";

export enum ParticipantStatus {
  CONFIRMED = "Confirmé",
  PENDING = "En attente",
  WAITLIST = "Liste d'attente",
}

export class GetParticipantsDto {
  @IsInt()
  @IsPositive()
  formationId: number;
}

export class UpdateParticipantStatusDto {
  @IsInt()
  @IsPositive()
  participant_id: string;

  @IsEnum(ParticipantStatus)
  statut: ParticipantStatus;
}

export class AddParticipantDto {
  @IsInt()
  @IsPositive()
  participant_id: string;

  @IsEnum(ParticipantStatus)
  statut: ParticipantStatus;
}

export class RemoveParticipantDto {
  @IsInt()
  @IsPositive()
  participantId: string;
}
