import { Express } from "express";
import { usersRoutes } from "./users.routes";
import { productsRoutes } from "./products.routes";
import { categoriesRoutes } from "./categories.routes";
import { addressRoutes } from "./address.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/products", productsRoutes());
  app.use("/categories", categoriesRoutes());
  app.use("/address", addressRoutes());
};

export default appRoutes;
