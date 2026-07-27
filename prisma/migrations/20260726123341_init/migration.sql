-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "extraId" TEXT,
    "item" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "payment" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderId_key" ON "Order"("orderId");
