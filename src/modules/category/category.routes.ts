import { t, Elysia } from "elysia";
import { CategoryController } from "./category.controller";

export const CategoryRoutes = (app: Elysia) =>
  app.group(
    "/category",
    (app) =>
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
    //   .get("/:id/tree", FolderController.getTree, {
    //     params: t.Object({ id: t.Numeric() }),
    //   })
    //   .put("/:id", FolderController.update, {
    //     params: t.Object({ id: t.Numeric() }),
    //     body: t.Object({
    //       name: t.Optional(t.String()),
    //       parentId: t.Optional(t.Numeric()),
    //     }),
    //   })
    //   .delete("/:id", FolderController.delete, {
    //     params: t.Object({ id: t.Numeric() }),
    //   })
  );
