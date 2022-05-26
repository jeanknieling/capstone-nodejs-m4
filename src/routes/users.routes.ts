import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import userCreateController from "../controllers/user/userCreate.controller";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userListController from "../controllers/user/userList.controller";
import userListOneController from "../controllers/user/userListOne.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userUpdateController from "../controllers/user/userUpdate.controller";

import {
  authUser,
  verifyisAdmMiddleware,
} from "../middlewares/user/authUser.middleware";
import tokenValidatorSchema from "../validations/token.validator";

import createUserSchema from "../validations/users/createUser.validation";
import updateUserSchema from "../validations/users/updateUser.validation";
import userLoginSchema from "../validations/users/userLogin.validation";

const routes = Router();

export const usersRoutes = () => {
  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createUserSchema }),
    userCreateController
  );

  routes.post(
    "/login",
    expressYupMiddleware({ schemaValidator: userLoginSchema }),
    userLoginController
  );

  routes.use(
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    })
  );

  routes.get("/", authUser, verifyisAdmMiddleware, userListController);

  routes.get("/me", authUser, userListOneController);

  routes.delete("/me", authUser, userDeleteSelfController);

  routes.patch(
    "/me",
    expressYupMiddleware({ schemaValidator: updateUserSchema }),
    authUser,
    userUpdateController
  );

  return routes;
};
