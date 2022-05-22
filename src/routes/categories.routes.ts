import { Router } from "express";

import categoryCreateController from "../controllers/category/categoryCreate.controller";
import categoryListController from "../controllers/category/categoryList.controller";
import categoryListOneController from "../controllers/category/categoryListOne.controller";
import categoryUpdateController from "../controllers/category/categoryUpdate.controller";
import categoryDeleteController from "../controllers/category/categoryDelete.controller";

import categoryAlreadyExists from "../middlewares/categories/categoryAlreadyExists.middleware";
import categoryNotFound from "../middlewares/categories/categoryNotFound.middleware";
import categoryNotRegistered from "../middlewares/categories/categoryNotRegistered.middleware";

const routes = Router();

export const categoriesRoutes = () => {
  
  routes.post("/", categoryAlreadyExists, categoryCreateController);
  routes.get("/", categoryNotRegistered,categoryListController);
  routes.get("/:id", categoryNotFound, categoryListOneController);
  routes.patch("/changes/:id", categoryNotFound, categoryAlreadyExists, categoryUpdateController);
  routes.delete("/:id", categoryNotFound, categoryDeleteController);

  return routes;
}