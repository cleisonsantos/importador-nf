-- CreateTable
CREATE TABLE "Contribuinte" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "inscricao_estadual" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "numero_regime_especial" TEXT NOT NULL,
    "cnpj_centro_distribuicao" TEXT NOT NULL,
    "inscricao_estadual_centro_distribuicao" TEXT NOT NULL,

    CONSTRAINT "Contribuinte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contribuinte_cnpj_key" ON "Contribuinte"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Contribuinte_cnpj_centro_distribuicao_key" ON "Contribuinte"("cnpj_centro_distribuicao");
