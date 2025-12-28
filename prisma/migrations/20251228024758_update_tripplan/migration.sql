/*
  Warnings:

  - Added the required column `tripId` to the `TripPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TripPlan" ADD COLUMN     "tripId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "TripPlan" ADD CONSTRAINT "TripPlan_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
