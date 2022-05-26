import { authUser } from "./../middlewares/user/authUser.middleware";
import { Router } from "express";
import addProductController from "../controllers/cart/addProduct.controller";
import delProductController from "../controllers/cart/delProduct.controller";

const routes = Router();

export const cartRoutes = () => {
    routes.post("/", authUser, addProductController);
    routes.delete("/:productId", authUser, delProductController);

    return routes;
};