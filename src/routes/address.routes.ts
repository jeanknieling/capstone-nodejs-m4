import { Router } from "express";
import addressCreateController from "../controllers/address/addressCreate.controller";
import addressDeleteController from "../controllers/address/addressDelete.controller";
import addressListController from "../controllers/address/addressList.controller";
import addressUpdateController from "../controllers/address/addressUpdate.controller";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";

const routes = Router();

export const addressRoutes = () => {
  routes.post("/",authUser, addressCreateController);
  routes.get("/",authUser, addressListController);
  // routes.patch("/", addressUpdateController);
  routes.delete("/", addressDeleteController);

  return routes;
}