import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";

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
import createCategorySchema from "../validations/categories/createCategory.validation";
import tokenValidatorSchema from "../validations/token.validator";
import listCategoryByIdValidatorSchema from "../validations/categories/listCategoryById.validator";
import deleteCategoryValidatorSchema from "../validations/categories/deleteCategory.validation";
import updateCategoryValidatorSchema from "../validations/categories/updateCategory.validation";

const routes = Router();

export const categoriesRoutes = () => {
  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createCategorySchema }),
    authUser,
    verifyisAdmMiddleware,
    categoryAlreadyExists,
    categoryCreateController
  );

  routes.get(
    "/",
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    }),
    authUser,
    categoryNotRegistered,
    categoryListController
  );

  routes.get(
    "/:id",
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    }),
    expressYupMiddleware({ schemaValidator: listCategoryByIdValidatorSchema }),
    authUser,
    categoryNotFound,
    categoryListOneController
  );

  routes.patch(
    "/changes/:id",
    expressYupMiddleware({ schemaValidator: updateCategoryValidatorSchema }),
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    }),
    authUser,
    verifyisAdmMiddleware,
    categoryNotFound,
    categoryAlreadyExists,
    categoryUpdateController
  );

  routes.delete(
    "/:id",
    expressYupMiddleware({ schemaValidator: deleteCategoryValidatorSchema }),
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    }),
    authUser,
    verifyisAdmMiddleware,
    categoryNotFound,
    categoryDeleteController
  );

  return routes;
};
