import { Router } from "express";

import categoryCreateController from "../controllers/category/categoryCreate.controller";
import categoryListController from "../controllers/category/categoryList.controller";
import categoryListOneController from "../controllers/category/categoryListOne.controller";
import categoryUpdateController from "../controllers/category/categoryUpdate.controller";
import categoryDeleteController from "../controllers/category/categoryDelete.controller";

import categoryAlreadyExists from "../middlewares/categories/categoryAlreadyExists.middleware";
import categoryNotFound from "../middlewares/categories/categoryNotFound.middleware";
import categoryNotRegistered from "../middlewares/categories/categoryNotRegistered.middleware";
import {
  authUser,
  verifyisAdmMiddleware,
} from "../middlewares/user/authUser.middleware";

const routes = Router();

export const categoriesRoutes = () => {
  routes.post(
    "/",
    authUser,
    verifyisAdmMiddleware,
    categoryAlreadyExists,
    categoryCreateController
  );
  routes.get("/", authUser, categoryNotRegistered, categoryListController);
  routes.get("/:id", authUser, categoryNotFound, categoryListOneController);
  routes.patch(
    "/changes/:id",
    authUser,
    verifyisAdmMiddleware,
    categoryNotFound,
    categoryAlreadyExists,
    categoryUpdateController
  );
  routes.delete(
    "/:id",
    authUser,
    verifyisAdmMiddleware,
    categoryNotFound,
    categoryDeleteController
  );

  return routes;
};
