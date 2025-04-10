/*
  Warnings:

  - The values [Gestionnaire] on the enum `RoleName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RoleName_new" AS ENUM ('ADMIN', 'GESTIONNAIRE', 'FORMATEUR', 'PARTICIPANT');
ALTER TABLE "Role" ALTER COLUMN "role_name" TYPE "RoleName_new" USING ("role_name"::text::"RoleName_new");
ALTER TYPE "RoleName" RENAME TO "RoleName_old";
ALTER TYPE "RoleName_new" RENAME TO "RoleName";
DROP TYPE "RoleName_old";
COMMIT;
