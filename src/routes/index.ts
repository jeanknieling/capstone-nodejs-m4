<<<<<<< HEAD
import { Router } from "express";
// import userCtr from "../controllers/users.Ctr";

const routes = Router();




// routes.post("/users", userCtr.store)
// routes.get("/users", userCtr.index )
// routes.get("/users/:id", userCtr.show)
// routes.delete("/users/:id", userCtr.delete)
// routes.patch("/users/:id", userCtr.update)

export default routes
=======
import { Router } from "express";
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

const routes = Router();

routes.post(
  "/users",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  userCreateController
);
routes.post(
  "/users/login",
  expressYupMiddleware({ schemaValidator: userLoginSchema }),
  userLoginController
);
routes.get("/users", userListController);
routes.get("/users/me", authUser, userListOneController);
routes.delete("/users/me", authUser, userDeleteSelfController);
routes.patch(
  "/users/:id",
  expressYupMiddleware({ schemaValidator: updateUserSchema }),
  authUser,
  userUpdateController
);

export default routes;
>>>>>>> feature/yupProducts
