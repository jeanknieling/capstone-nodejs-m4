import { Express } from "express";
import { usersRoutes } from "./users.routes";
import { productsRoutes } from "./products.routes";
import { categoriesRoutes } from "./categories.routes";
import { addressRoutes } from "./address.routes";
import { orderRoutes } from "./order.routes";
import { buysRoutes } from "./buys.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", usersRoutes());
  app.use("/products", productsRoutes());
  app.use("/address", addressRoutes());
  app.use("/category", categoriesRoutes());
  app.use("/order", orderRoutes());
  app.use("/buys", buysRoutes());

};
