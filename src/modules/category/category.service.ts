import { Prisma } from "@prisma/client";
import { status } from "elysia";
import { CategoryRepo } from "./category.repository";
import { prisma } from "../../lib/prisma";

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

  update: async ({
    category_id,
    body,
  }: {
    category_id: number;
    body: Prisma.CategoryUpdateInput;
  }) => {
    const category = await CategoryRepo.getOne(category_id);
    if (!category) {
      throw new Error("Category to update is not found");
    }

    if (body.category_name == "") {
      throw new Error("Category name cannot be empty");
    }

    if (body.category_description == "") {
      throw new Error("Category description cannot be empty");
    }

    if (body.category_tags == null) {
      throw new Error("Category tags cannot be empty, should be an array");
    }

    return await CategoryRepo.update(category_id, { body });
  },

  destroy: async ({ category_id }: { category_id: number }) => {
    const category = await CategoryRepo.getOne(category_id);

    if (!category) {
      throw new Error("Category to delete is not found");
    }

    return await CategoryRepo.destroy(category_id);
  },
};
