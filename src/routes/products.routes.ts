import { Router } from "express";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";

const routes = Router();

export const productsRoutes = () => {
  routes.post("/", );
  routes.get("/", );
  routes.patch("/", );
  routes.delete("/", );

  return routes;
}