import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import productCreateController from "../controllers/product/productCreate.controller";
import productDeleteController from "../controllers/product/productDelete.controller";
import productLikeController from "../controllers/product/productLike.controller";
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
import createProductSchema from "../validations/products/createProduct.validation";
import deleteProductSchema from "../validations/products/deleteProduct.validator";
import likeProductSchema from "../validations/products/likeProducts.validation";
import listProductByCategorySchema from "../validations/products/listProductByCategory.validation";
import listProductByNameSchema from "../validations/products/listProductByName.validation";
import updateProductSchema from "../validations/products/updateProduct.validator";
import tokenValidatorSchema from "../validations/token.validator";

const routes = Router();

export const productsRoutes = () => {
  routes.use(
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    })
  );

  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createProductSchema }),
    authUser,
    verifyisAdmMiddleware,
    productAlreadyExists,
    productWithoutCategory,
    productCreateController
  );

  routes.post(
    "/like/:id",
    expressYupMiddleware({ schemaValidator: likeProductSchema }),
    authUser,
    productLikeController
  );

  routes.get("/", authUser, productListController);

  routes.get(
    "/product",
    expressYupMiddleware({ schemaValidator: listProductByNameSchema }),
    authUser,
    productNotFound,
    productListByNameController
  );

  routes.get(
    "/category",
    expressYupMiddleware({
      schemaValidator: listProductByCategorySchema,
    }),
    authUser,
    categoryNotFoundByName,
    productListByCategoryController
  );

  routes.patch(
    "/changes/:id",
    expressYupMiddleware({ schemaValidator: updateProductSchema }),
    authUser,
    verifyisAdmMiddleware,
    categoryNotFoundByName,
    productNotRegistered,
    productUpdateController
  );

  routes.delete(
    "/:id",
    expressYupMiddleware({ schemaValidator: deleteProductSchema }),
    authUser,
    verifyisAdmMiddleware,
    productNotRegistered,
    productDeleteController
  );

  return routes;
};
