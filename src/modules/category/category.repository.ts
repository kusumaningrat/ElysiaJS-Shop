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

  update: async (
    category_id: number,
    { body }: { body: Prisma.CategoryUpdateInput }
  ) => {
    const { category_name, category_description, category_tags } = body;
    return await prisma.category.update({
      where: { category_id },
      data: { category_name, category_description, category_tags },
    });
  },

  destroy: async (category_id: number) => {
    return await prisma.category.delete({ where: { category_id } });
  },
};
