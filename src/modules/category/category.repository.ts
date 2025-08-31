import { Prisma } from "@prisma/client";
import { status } from "elysia";
import { prisma } from "../../lib/prisma";

export const CategoryRepo = {
  create: async ({ body }: { body: Prisma.CategoryCreateInput }) => {
    return await prisma.category.create({
      data: {
        ...body,
      },
    });
  },

  getAll: async () => {
    return await prisma.category.findMany();
  },

  getOne: async (category_id: number) => {
    return await prisma.category.findFirst({ where: { category_id } });
  },

  getByCategoryName: async (category_name: string) => {
    return await prisma.category.findFirst({ where: { category_name } });
  },
};
