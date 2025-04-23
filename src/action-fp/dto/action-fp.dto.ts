import { IsEnum, IsInt, IsPositive, IsString } from 'class-validator';

export enum ParticipantStatus {
  CONFIRMED = 'Confirmé',
  PENDING = 'En attente',
  WAITLIST = "Liste d'attente",
}

export class GetParticipantsDto {
  @IsInt()
  @IsPositive()
  formationId: number;
}

export class UpdateParticipantStatusDto {
  @IsString()
  participant_id: string;

  @IsEnum(ParticipantStatus)
  statut: ParticipantStatus;
}

export class AddParticipantDto {
  @IsString()
  participant_id: string;

  @IsEnum(ParticipantStatus)
  statut: ParticipantStatus;
}

export class RemoveParticipantDto {
  @IsInt()
  @IsPositive()
  participantId: string;
}
