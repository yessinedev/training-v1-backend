/*
  Warnings:

  - You are about to drop the column `badge_path` on the `Formateur` table. All the data in the column will be lost.
  - You are about to drop the column `cv_path` on the `Formateur` table. All the data in the column will be lost.
  - The primary key for the `Seance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `senace_id` on the `Seance` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[participant_id,action_id]` on the table `Attestation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[role_name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `role_name` on the `Role` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PresenceStatus" AS ENUM ('PRESENT', 'ABSENT');

-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('CV', 'BADGE', 'FEUILLE_EMARGEMENT');

-- CreateEnum
CREATE TYPE "RoleName" AS ENUM ('ADMIN', 'Gestionnaire', 'FORMATEUR', 'PARTICIPANT');

-- DropForeignKey
ALTER TABLE "Seance" DROP CONSTRAINT "Seance_senace_id_fkey";

-- AlterTable
ALTER TABLE "Formateur" DROP COLUMN "badge_path",
DROP COLUMN "cv_path";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "role_name",
ADD COLUMN     "role_name" "RoleName" NOT NULL;

-- AlterTable
ALTER TABLE "Seance" DROP CONSTRAINT "Seance_pkey",
DROP COLUMN "senace_id",
ADD COLUMN     "seance_id" SERIAL NOT NULL,
ADD CONSTRAINT "Seance_pkey" PRIMARY KEY ("seance_id");

-- CreateTable
CREATE TABLE "File" (
    "file_id" SERIAL NOT NULL,
    "file_path" VARCHAR(255) NOT NULL,
    "type" "FileType" NOT NULL,
    "formateur_id" TEXT,
    "action_id" INTEGER,
    "validated" BOOLEAN DEFAULT false,
    "validated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "File_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "Presence" (
    "presence_id" SERIAL NOT NULL,
    "status" "PresenceStatus" NOT NULL DEFAULT 'PRESENT',
    "noted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "participant_id" TEXT NOT NULL,
    "seance_id" INTEGER NOT NULL,
    "formateur_id" TEXT,

    CONSTRAINT "Presence_pkey" PRIMARY KEY ("presence_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Presence_participant_id_seance_id_key" ON "Presence"("participant_id", "seance_id");

-- CreateIndex
CREATE UNIQUE INDEX "Attestation_participant_id_action_id_key" ON "Attestation"("participant_id", "action_id");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_name_key" ON "Role"("role_name");

-- AddForeignKey
ALTER TABLE "Seance" ADD CONSTRAINT "Seance_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "ActionFormation"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_formateur_id_fkey" FOREIGN KEY ("formateur_id") REFERENCES "Formateur"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "ActionFormation"("action_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participant"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_seance_id_fkey" FOREIGN KEY ("seance_id") REFERENCES "Seance"("seance_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Presence" ADD CONSTRAINT "Presence_formateur_id_fkey" FOREIGN KEY ("formateur_id") REFERENCES "Formateur"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
