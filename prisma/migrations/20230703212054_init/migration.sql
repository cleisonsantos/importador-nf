/*
  Warnings:

  - You are about to drop the column `contribuinteId` on the `produto` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "produto" DROP CONSTRAINT "produto_contribuinteId_fkey";

-- AlterTable
ALTER TABLE "produto" DROP COLUMN "contribuinteId";
