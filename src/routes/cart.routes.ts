import { Router } from "express";
import addProductController from "../controllers/cart/addProduct.controller";
import delProductController from "../controllers/cart/delProduct.controller";

const routes = Router()

export const cartRoutes = () => {

  routes.post("/", addProductController)
  routes.delete("/:productId", delProductController)

  return routes;
}