/*
  Warnings:

  - You are about to drop the column `createdAt` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `contribuinte` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `contribuinte` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `contribuinte` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contribuinte" DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deleted_at" TIMESTAMP(6),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
