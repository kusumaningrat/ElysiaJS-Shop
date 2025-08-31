import { t, Elysia } from "elysia";
import { CategoryController } from "./category.controller";

export const CategoryRoutes = (app: Elysia) =>
  app.group("/category", (app) =>
    app
      .post("/", CategoryController.create, {
        body: t.Object({
          category_name: t.String(),
          category_description: t.String(),
          category_tags: t.ArrayString(),
        }),
      })
      .get("/", CategoryController.getAll)
      .get("/:category_id", CategoryController.getOne, {
        params: t.Object({ category_id: t.Numeric() }),
      })
      .put("/:category_id", CategoryController.update, {
        params: t.Object({ category_id: t.Numeric() }),
        body: t.Object({
          category_name: t.String(),
          category_description: t.String(),
          category_tags: t.ArrayString(),
        }),
      })
      .delete("/:category_id", CategoryController.destroy, {
        params: t.Object({ category_id: t.Numeric() }),
      })
  );
