import { Router } from "express";

import categoryCreateController from "../controllers/category/categoryCreate.controller";
import categoryListController from "../controllers/category/categoryList.controller";
import categoryListOneController from "../controllers/category/categoryListOne.controller";
import categoryUpdateController from "../controllers/category/categoryUpdate.controller";
import categoryDeleteController from "../controllers/category/categoryDelete.controller";

import alreadyCategoryExists from "../middlewares/categories/alreadyCategoryExists.middleware";
import categoryNotFound from "../middlewares/categories/categoryNotFound.middleware";
import withoutCategoriesRegistered from "../middlewares/categories/withoutCategoriesRegistered.middleware";

const routes = Router();

export const categoriesRoutes = () => {
  
  routes.post("/", alreadyCategoryExists, categoryCreateController);
  routes.get("/", withoutCategoriesRegistered,categoryListController);
  routes.get("/:id", categoryNotFound, categoryListOneController);
  routes.patch("/edit/:id", categoryNotFound, alreadyCategoryExists, categoryUpdateController);
  routes.delete("/:id", categoryNotFound, categoryDeleteController);

  return routes;
}