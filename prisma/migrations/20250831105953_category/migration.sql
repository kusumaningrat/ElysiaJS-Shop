-- CreateTable
CREATE TABLE "public"."Category" (
    "category_id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,
    "category_description" TEXT NOT NULL,
    "category_tags" TEXT[],

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);
