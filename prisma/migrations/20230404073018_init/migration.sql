/*
  Warnings:

  - You are about to drop the column `cnpj_centro_distribuicao` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `inscricao_estadual` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `inscricao_estadual_centro_distribuicao` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `numero_regime_especial` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `contribuinte` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpjCentroDistribuicao]` on the table `contribuinte` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `contribuinte` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "contribuinte_cnpj_centro_distribuicao_key";

-- AlterTable
ALTER TABLE "contribuinte" DROP COLUMN "cnpj_centro_distribuicao",
DROP COLUMN "created_at",
DROP COLUMN "deleted_at",
DROP COLUMN "inscricao_estadual",
DROP COLUMN "inscricao_estadual_centro_distribuicao",
DROP COLUMN "numero_regime_especial",
DROP COLUMN "updated_at",
ADD COLUMN     "cnpjCentroDistribuicao" VARCHAR(14),
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(6),
ADD COLUMN     "inscricaoEstadual" VARCHAR(10),
ADD COLUMN     "inscricaoEstadualCentroDistribuicao" VARCHAR(10),
ADD COLUMN     "numeroRegimeEspecial" VARCHAR(10),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "contribuinte_cnpjCentroDistribuicao_key" ON "contribuinte"("cnpjCentroDistribuicao");
