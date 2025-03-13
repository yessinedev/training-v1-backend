import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateDomaineDto {
  @IsString()
  @MinLength(1, { message: "Domain name is required" })
  @MaxLength(100, { message: "Domain name must be less than 100 characters" })
  libelle_domaine: string;
}
