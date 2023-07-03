/*
  Warnings:

  - You are about to drop the column `CEST` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `CFOP` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `NCM` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `cEANTrib` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `cProd` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `detnItem` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `qCom` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `uCom` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `vProd` on the `nota_fiscal` table. All the data in the column will be lost.
  - You are about to drop the column `xProd` on the `nota_fiscal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "nota_fiscal" DROP COLUMN "CEST",
DROP COLUMN "CFOP",
DROP COLUMN "NCM",
DROP COLUMN "cEANTrib",
DROP COLUMN "cProd",
DROP COLUMN "detnItem",
DROP COLUMN "qCom",
DROP COLUMN "uCom",
DROP COLUMN "vProd",
DROP COLUMN "xProd";

-- CreateTable
CREATE TABLE "produto" (
    "id" SERIAL NOT NULL,
    "detnItem" INTEGER NOT NULL,
    "cProd" INTEGER NOT NULL,
    "xProd" VARCHAR(150) NOT NULL,
    "NCM" INTEGER NOT NULL,
    "CEST" VARCHAR(14) NOT NULL,
    "CFOP" INTEGER NOT NULL,
    "uCom" VARCHAR(10) NOT NULL,
    "qCom" DECIMAL(9,3) NOT NULL,
    "vProd" DECIMAL(9,2) NOT NULL,
    "cEANTrib" VARCHAR(14) NOT NULL,
    "uTrib" TEXT NOT NULL,
    "qTrib" DECIMAL(9,4) NOT NULL,
    "vUnTrib" DECIMAL(9,2) NOT NULL,
    "indTot" INTEGER NOT NULL,
    "vTotTrib" DECIMAL(9,2) NOT NULL,
    "ICMSorig" INTEGER NOT NULL,
    "ICMSCST" INTEGER NOT NULL,
    "ICMSpRedBCEfet" DECIMAL(9,2) NOT NULL,
    "ICMSvBCEfet" DECIMAL(9,2) NOT NULL,
    "ICMSpICMSEfet" DECIMAL(9,2) NOT NULL,
    "ICMSvICMSEfet" DECIMAL(9,2) NOT NULL,
    "PISCST" INTEGER NOT NULL,
    "PISvBC" DECIMAL(9,2) NOT NULL,
    "PISpPIS" DECIMAL(9,2) NOT NULL,
    "PISvPIS" DECIMAL(9,2) NOT NULL,
    "COFINSCST" INTEGER NOT NULL,
    "COFINSvBC" DECIMAL(9,2) NOT NULL,
    "COFINSpCOFINS" DECIMAL(9,2) NOT NULL,
    "COFINSvCOFINS" DECIMAL(9,2) NOT NULL,
    "notaFiscalId" INTEGER,
    "contribuinteId" INTEGER,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_notaFiscalId_fkey" FOREIGN KEY ("notaFiscalId") REFERENCES "nota_fiscal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_contribuinteId_fkey" FOREIGN KEY ("contribuinteId") REFERENCES "contribuinte"("id") ON DELETE SET NULL ON UPDATE CASCADE;
