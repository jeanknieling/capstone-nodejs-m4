import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import productCreateController from "../controllers/product/productCreate.controller";
import productDeleteController from "../controllers/product/productDelete.controller";
import productListController from "../controllers/product/productList.controller";
import productListByCategoryController from "../controllers/product/productListByCategory.controller";
import productListByNameController from "../controllers/product/productListByName.controller";
import productUpdateController from "../controllers/product/productUpdate.controller";

import categoryNotFoundByName from "../middlewares/categories/categoryNotFoundByName.middleware";
import productAlreadyExists from "../middlewares/products/productAlreadyExists.middleware";
import productNotFound from "../middlewares/products/productNotFound.middleware";
import productNotRegistered from "../middlewares/products/productNotRegistered.middleware";
import productWithoutCategory from "../middlewares/products/productWithoutCategory.middleware";

import {
  authUser,
  verifyisAdmMiddleware,
} from "../middlewares/user/authUser.middleware";
import createProductValidatorSchema from "../validations/products/createProduct.validation";
import deleteProductValidatorSchema from "../validations/products/deleteProduct.validator";
import listProductByCategoryValidatorSchema from "../validations/products/listProductByCategory.validation";
import listProductByNameValidatorSchema from "../validations/products/listProductByName.validation";
import updateProductValidatorSchema from "../validations/products/updateProduct.validator";
import tokenValidatorSchema from "../validations/token.validator";

const routes = Router();

export const buysRoutes = () => {
  routes.use(
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    })
  );
  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createProductValidatorSchema }),
    authUser,
    verifyisAdmMiddleware,
    productAlreadyExists,
    productWithoutCategory,
    productCreateController
  );

  routes.get("/", authUser, productListController);

  routes.post(
    "/product",
    expressYupMiddleware({ schemaValidator: listProductByNameValidatorSchema }),
    authUser,
    productNotFound,
    productListByNameController
  );

  routes.post(
    "/category",
    expressYupMiddleware({
      schemaValidator: listProductByCategoryValidatorSchema,
    }),
    authUser,
    categoryNotFoundByName,
    productListByCategoryController
  );

  routes.patch(
    "/changes/:id",
    expressYupMiddleware({ schemaValidator: updateProductValidatorSchema }),
    authUser,
    verifyisAdmMiddleware,
    categoryNotFoundByName,
    productNotRegistered,
    productUpdateController
  );

  routes.delete(
    "/changes/:id",
    expressYupMiddleware({ schemaValidator: deleteProductValidatorSchema }),
    authUser,
    verifyisAdmMiddleware,
    productNotRegistered,
    productDeleteController
  );

  return routes;
};
