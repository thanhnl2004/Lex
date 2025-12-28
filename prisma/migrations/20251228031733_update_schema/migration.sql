/*
  Warnings:

  - You are about to drop the column `message` on the `TripMessage` table. All the data in the column will be lost.
  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `role` on the `TripMessage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ASSISTANT', 'SYSTEM', 'TOOL');

-- DropForeignKey
ALTER TABLE "TripMessage" DROP CONSTRAINT "TripMessage_tripId_fkey";

-- DropForeignKey
ALTER TABLE "TripPlan" DROP CONSTRAINT "TripPlan_tripId_fkey";

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "budget" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TripMessage" DROP COLUMN "message",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- DropTable
DROP TABLE "Note";

-- CreateIndex
CREATE INDEX "Trip_userId_idx" ON "Trip"("userId");

-- CreateIndex
CREATE INDEX "TripMessage_tripId_createdAt_idx" ON "TripMessage"("tripId", "createdAt");

-- CreateIndex
CREATE INDEX "TripPlan_tripId_createdAt_idx" ON "TripPlan"("tripId", "createdAt");

-- AddForeignKey
ALTER TABLE "TripMessage" ADD CONSTRAINT "TripMessage_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlan" ADD CONSTRAINT "TripPlan_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE CASCADE ON UPDATE CASCADE;
