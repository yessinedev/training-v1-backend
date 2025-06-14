-- AlterTable
ALTER TABLE "ActionFormation" ADD COLUMN     "surveyId" TEXT;

-- AddForeignKey
ALTER TABLE "ActionFormation" ADD CONSTRAINT "ActionFormation_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE SET NULL ON UPDATE CASCADE;
