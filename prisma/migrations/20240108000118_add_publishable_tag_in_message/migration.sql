/*
  Warnings:

  - Added the required column `publishable` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "messages" ADD COLUMN     "publishable" BOOLEAN NOT NULL;
