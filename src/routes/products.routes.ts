import { Router } from "express";

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

const routes = Router();

export const productsRoutes = () => {
  routes.post(
    "/",
    authUser,
    verifyisAdmMiddleware,
    productAlreadyExists,
    productWithoutCategory,
    productCreateController
  );
  routes.get("/", authUser, productListController);
  routes.post(
    "/product",
    authUser,
    productNotFound,
    productListByNameController
  );
  routes.post(
    "/category",
    authUser,
    categoryNotFoundByName,
    productListByCategoryController
  );
  routes.patch(
    "/changes/:id",
    authUser,
    verifyisAdmMiddleware,
    categoryNotFoundByName,
    productNotRegistered,
    productUpdateController
  );
  routes.delete(
    "/changes/:id",
    authUser,
    verifyisAdmMiddleware,
    productNotRegistered,
    productDeleteController
  );

  return routes;
};
