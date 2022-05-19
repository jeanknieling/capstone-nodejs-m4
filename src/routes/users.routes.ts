import { Router } from "express";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userListController from "../controllers/user/userList.controller";
import userListOneController from "../controllers/user/userListOne.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";

const usersRoutes = Router();

usersRoutes.post("/users", userCreateController);
usersRoutes.post("/users/login", userLoginController);
usersRoutes.get("/users", userListController);
usersRoutes.get("/users/:id", authUser, userListOneController);
usersRoutes.delete("/users/:id", authUser, userDeleteSelfController);
usersRoutes.patch("/users/:id", authUser, userUpdateController);

export default usersRoutes;