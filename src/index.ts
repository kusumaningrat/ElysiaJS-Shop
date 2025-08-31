import { Elysia } from "elysia";
import { UserRoutes } from "./modules/user/user.routes";
import { CategoryRoutes } from "./modules/category/category.routes";

const app = new Elysia().use(UserRoutes).use(CategoryRoutes).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
