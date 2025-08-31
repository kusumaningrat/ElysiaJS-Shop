import { t, Elysia } from "elysia";
import { UserController } from "./user.controller";

export const UserRoutes = (app: Elysia) =>
  app.group("/user", app =>
    app
      .post("/", UserController.create, {
        body: t.Object({
          email: t.String(),
          fullname: t.String(),
          username: t.String(),
          password: t.String(),
          photo_profile: t.File({ type: ["image/png", "image/jpg", "image/jpeg"], maxSize: 5_000_000 }),
        }),
        type: "multipart/form-data"
      })
      .get("/", UserController.getAll)
    //   .get("/:id/children", FolderController.getChildren, {
    //     params: t.Object({ id: t.Numeric() }),
    //   })
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