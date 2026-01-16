-- AlterTable
ALTER TABLE "TripPlan" ALTER COLUMN "sources" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Document" (
    "userId" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "contentJson" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentMessage" (
    "id" SERIAL NOT NULL,
    "documentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL,
    "content" TEXT NOT NULL,
    "partsJson" JSONB,

    CONSTRAINT "DocumentMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Document_userId_idx" ON "Document"("userId");

-- CreateIndex
CREATE INDEX "DocumentMessage_documentId_createdAt_idx" ON "DocumentMessage"("documentId", "createdAt");

-- AddForeignKey
ALTER TABLE "DocumentMessage" ADD CONSTRAINT "DocumentMessage_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
