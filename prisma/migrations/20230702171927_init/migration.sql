-- CreateTable
CREATE TABLE "nota_fiscal" (
    "id" SERIAL NOT NULL,
    "contribuinteId" INTEGER NOT NULL,
    "fileHash" TEXT,
    "nfeId" TEXT NOT NULL,
    "mod" INTEGER NOT NULL,
    "serie" INTEGER NOT NULL,
    "nNF" INTEGER NOT NULL,
    "dhEmi" TIMESTAMP(3) NOT NULL,
    "tpNF" BOOLEAN NOT NULL,
    "indFinal" BOOLEAN NOT NULL,
    "refNFe" TEXT NOT NULL,
    "emitCNPJ" VARCHAR(14) NOT NULL,
    "emitxNome" VARCHAR(100) NOT NULL,
    "emitUF" VARCHAR(2) NOT NULL,
    "emitIE" VARCHAR(10),
    "emitIEST" VARCHAR(10),
    "destCNPJ" VARCHAR(14) NOT NULL,
    "destxNome" VARCHAR(100) NOT NULL,
    "destUF" VARCHAR(2) NOT NULL,
    "destindIEDest" VARCHAR(10),
    "destIE" VARCHAR(10),
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
    "vFrete" DECIMAL(9,2) NOT NULL,
    "vSeg" DECIMAL(9,2) NOT NULL,
    "vDesc" DECIMAL(9,2) NOT NULL,
    "vOutro" DECIMAL(9,2) NOT NULL,
    "CST" INTEGER NOT NULL,
    "vBC" DECIMAL(9,2) NOT NULL,
    "vICMS" DECIMAL(9,2) NOT NULL,
    "vBCST" DECIMAL(9,2) NOT NULL,
    "vICMSST" DECIMAL(9,2) NOT NULL,
    "vFCPST" DECIMAL(9,2) NOT NULL,
    "vBCSTRet" DECIMAL(9,2) NOT NULL,
    "vICMSSTRet" DECIMAL(9,2) NOT NULL,
    "vFCPSTRet" DECIMAL(9,2) NOT NULL,
    "vIPI" DECIMAL(9,2) NOT NULL,
    "cProdANP" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(6),

    CONSTRAINT "nota_fiscal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "nota_fiscal" ADD CONSTRAINT "nota_fiscal_contribuinteId_fkey" FOREIGN KEY ("contribuinteId") REFERENCES "contribuinte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
