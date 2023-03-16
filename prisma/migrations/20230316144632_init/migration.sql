-- AlterTable
ALTER TABLE "Contribuinte" ALTER COLUMN "inscricao_estadual" DROP NOT NULL,
ALTER COLUMN "numero_regime_especial" DROP NOT NULL,
ALTER COLUMN "cnpj_centro_distribuicao" DROP NOT NULL,
ALTER COLUMN "inscricao_estadual_centro_distribuicao" DROP NOT NULL;
