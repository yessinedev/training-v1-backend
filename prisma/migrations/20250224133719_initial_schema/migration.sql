-- CreateEnum
CREATE TYPE "SeanceStatut" AS ENUM ('EN_ATTENTE', 'EN_COURS', 'TERMINEE', 'ANNULEE');

-- CreateTable
CREATE TABLE "Role" (
    "role_id" SERIAL NOT NULL,
    "role_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "nom" VARCHAR(100) NOT NULL,
    "prenom" VARCHAR(100) NOT NULL,
    "telephone" VARCHAR(50) NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Formateur" (
    "user_id" TEXT NOT NULL,
    "cv_path" VARCHAR(255),
    "badge_path" VARCHAR(255),

    CONSTRAINT "Formateur_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "user_id" TEXT NOT NULL,
    "entreprise" VARCHAR(100) NOT NULL,
    "poste" VARCHAR(100) NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Domaine" (
    "domaine_id" SERIAL NOT NULL,
    "libelle_domaine" VARCHAR(100) NOT NULL,

    CONSTRAINT "Domaine_pkey" PRIMARY KEY ("domaine_id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "theme_id" SERIAL NOT NULL,
    "libelle_theme" VARCHAR(100) NOT NULL,
    "domaine_id" INTEGER NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("theme_id")
);

-- CreateTable
CREATE TABLE "ActionFormation" (
    "action_id" SERIAL NOT NULL,
    "type_action" VARCHAR(50) NOT NULL,
    "date_debut" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3) NOT NULL,
    "duree_jours" INTEGER,
    "duree_heures" INTEGER,
    "nb_seances" INTEGER,
    "lieu" VARCHAR(100) NOT NULL,
    "nb_participants_prevu" INTEGER,
    "theme_id" INTEGER NOT NULL,

    CONSTRAINT "ActionFormation_pkey" PRIMARY KEY ("action_id")
);

-- CreateTable
CREATE TABLE "Seance" (
    "senace_id" SERIAL NOT NULL,
    "date" TIMESTAMP(3),
    "heure" VARCHAR(50),
    "duree_heures" INTEGER,
    "statut" "SeanceStatut" NOT NULL DEFAULT 'EN_ATTENTE',
    "action_id" INTEGER NOT NULL,
    "formateur_id" TEXT NOT NULL,

    CONSTRAINT "Seance_pkey" PRIMARY KEY ("senace_id")
);

-- CreateTable
CREATE TABLE "ActionFormationFormateur" (
    "action_id" INTEGER NOT NULL,
    "formateur_id" TEXT NOT NULL,

    CONSTRAINT "ActionFormationFormateur_pkey" PRIMARY KEY ("action_id","formateur_id")
);

-- CreateTable
CREATE TABLE "ActionFormationParticipant" (
    "action_id" INTEGER NOT NULL,
    "participant_id" TEXT NOT NULL,
    "date_inscription" TIMESTAMP(3),
    "statut" VARCHAR(50),

    CONSTRAINT "ActionFormationParticipant_pkey" PRIMARY KEY ("action_id","participant_id")
);

-- CreateTable
CREATE TABLE "Attestation" (
    "attestation_id" SERIAL NOT NULL,
    "participant_id" TEXT NOT NULL,
    "action_id" INTEGER NOT NULL,
    "date_emission" TIMESTAMP(3),
    "qr_code_ref" VARCHAR(255),

    CONSTRAINT "Attestation_pkey" PRIMARY KEY ("attestation_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Attestation_qr_code_ref_key" ON "Attestation"("qr_code_ref");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("role_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Formateur" ADD CONSTRAINT "Formateur_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_domaine_id_fkey" FOREIGN KEY ("domaine_id") REFERENCES "Domaine"("domaine_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionFormation" ADD CONSTRAINT "ActionFormation_theme_id_fkey" FOREIGN KEY ("theme_id") REFERENCES "Theme"("theme_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seance" ADD CONSTRAINT "Seance_senace_id_fkey" FOREIGN KEY ("senace_id") REFERENCES "ActionFormation"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seance" ADD CONSTRAINT "Seance_formateur_id_fkey" FOREIGN KEY ("formateur_id") REFERENCES "Formateur"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionFormationFormateur" ADD CONSTRAINT "ActionFormationFormateur_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "ActionFormation"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionFormationFormateur" ADD CONSTRAINT "ActionFormationFormateur_formateur_id_fkey" FOREIGN KEY ("formateur_id") REFERENCES "Formateur"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionFormationParticipant" ADD CONSTRAINT "ActionFormationParticipant_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "ActionFormation"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionFormationParticipant" ADD CONSTRAINT "ActionFormationParticipant_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participant"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_participant_id_fkey" FOREIGN KEY ("participant_id") REFERENCES "Participant"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attestation" ADD CONSTRAINT "Attestation_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "ActionFormation"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;
