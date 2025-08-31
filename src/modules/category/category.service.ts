import { Prisma } from "@prisma/client";
import { status } from "elysia";
import { CategoryRepo } from "./category.repository";

export const CategoryService = {
  create: async ({ body }: { body: Prisma.CategoryCreateInput }) => {
    const { category_name } = body;

    const checkIfCategoryExist =
      await CategoryRepo.getByCategoryName(category_name);
    if (checkIfCategoryExist) {
      throw new Error("Category name already exist");
    }

    return await CategoryRepo.create({ body });
  },

  getAll: async () => {
    return await CategoryRepo.getAll();
  },

  getOne: async ({ category_id }: { category_id: number }) => {
    const category = await CategoryRepo.getOne(category_id);

    if (!category) {
      throw new Error("Category not found");
    }

    return category;
  },
};
