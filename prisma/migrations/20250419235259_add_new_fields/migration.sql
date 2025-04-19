-- AlterTable
ALTER TABLE "ActionFormation" ADD COLUMN     "prix_unitaire" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "title" VARCHAR(100);

-- AlterTable
ALTER TABLE "Formateur" ADD COLUMN     "tarif_heure" DOUBLE PRECISION,
ADD COLUMN     "tarif_jour" DOUBLE PRECISION,
ADD COLUMN     "tarif_seance" DOUBLE PRECISION;
