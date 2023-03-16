/*
  Warnings:

  - You are about to alter the column `cnpj` on the `Contribuinte` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.
  - You are about to alter the column `inscricao_estadual` on the `Contribuinte` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `nome` on the `Contribuinte` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `numero_regime_especial` on the `Contribuinte` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `cnpj_centro_distribuicao` on the `Contribuinte` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(14)`.
  - You are about to alter the column `inscricao_estadual_centro_distribuicao` on the `Contribuinte` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- AlterTable
ALTER TABLE "Contribuinte" ALTER COLUMN "cnpj" SET DATA TYPE VARCHAR(14),
ALTER COLUMN "inscricao_estadual" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "nome" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "numero_regime_especial" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "cnpj_centro_distribuicao" SET DATA TYPE VARCHAR(14),
ALTER COLUMN "inscricao_estadual_centro_distribuicao" SET DATA TYPE VARCHAR(10);
