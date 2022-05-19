import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userListController from "../controllers/user/userList.controller";
import userListOneController from "../controllers/user/userListOne.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";

const routes = Router();

export const usersRoutes = () => {
  
  routes.post("/users", userCreateController);
  routes.post("/users/login", userLoginController);
  routes.get("/users", userListController);
  routes.get("/users/:id", authUser, userListOneController);
  routes.delete("/users/:id", authUser, userDeleteSelfController);
  routes.patch("/users/:id", authUser, userUpdateController);

  return routes;
}