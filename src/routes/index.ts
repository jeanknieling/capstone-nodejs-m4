
import { Router } from "express";
import { Express } from "express";
import { usersRoutes } from "./users.routes";
import { productsRoutes } from "./products.routes";
import { categoriesRoutes } from "./categories.routes";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userListController from "../controllers/user/userList.controller";
import userListOneController from "../controllers/user/userListOne.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";
import { expressYupMiddleware } from "express-yup-middleware";

import createUserSchema from "../validations/users/createUser.validation";
import userLoginSchema from "../validations/users/userLogin.validation";
import updateUserSchema from "../validations/users/updateUser.validation";


export const appRoutes = (app: Express) => {


  app.use("/users", usersRoutes())
  app.use("/products", productsRoutes())
  app.use("/categories", categoriesRoutes())





}
