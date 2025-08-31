import { Prisma } from "@prisma/client";
import { status } from "elysia";
import { CategoryService } from "./category.service";

export const CategoryController = {
  create: async ({ body }: { body: Prisma.CategoryCreateInput }) => {
    return await CategoryService.create({ body });
  },

  getAll: async () => {
    return await CategoryService.getAll();
  },

  getOne: async ({ params }: { params: { category_id: number } }) => {
    const { category_id } = params;
    if (!category_id) {
      return status(404, "Category not found");
    }

    return await CategoryService.getOne({ category_id });
  },
};
