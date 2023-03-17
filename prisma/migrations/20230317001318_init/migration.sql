/*
  Warnings:

  - You are about to drop the `Contribuinte` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contribuinte";

-- CreateTable
CREATE TABLE "contribuinte" (
    "id" SERIAL NOT NULL,
    "cnpj" VARCHAR(14) NOT NULL,
    "inscricao_estadual" VARCHAR(10),
    "nome" VARCHAR(100) NOT NULL,
    "numero_regime_especial" VARCHAR(10),
    "cnpj_centro_distribuicao" VARCHAR(14),
    "inscricao_estadual_centro_distribuicao" VARCHAR(10),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(6),

    CONSTRAINT "contribuinte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contribuinte_cnpj_key" ON "contribuinte"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "contribuinte_cnpj_centro_distribuicao_key" ON "contribuinte"("cnpj_centro_distribuicao");
