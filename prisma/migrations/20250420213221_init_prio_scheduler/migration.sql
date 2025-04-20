-- CreateTable
CREATE TABLE "PrioRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "creatorId" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "plan" TEXT NOT NULL,
    "involved" TEXT NOT NULL,
    "callText" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "note" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
