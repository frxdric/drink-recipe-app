-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "ingredient" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
