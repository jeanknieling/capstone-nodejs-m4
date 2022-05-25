import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import addressCreateController from "../controllers/address/addressCreate.controller";
import addressDeleteController from "../controllers/address/addressDelete.controller";
import addressListController from "../controllers/address/addressList.controller";
import addressListOneController from "../controllers/address/addressListOne.controller";
import addressUpdateController from "../controllers/address/addressUpdate.controller";
import addressUpdateAdmController from "../controllers/address/addressUpdateAdm.controller";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";
import createAddressSchema from "../validations/address/createAddress.validator";
import updateAddressSchema from "../validations/address/deleteAddress.validator";
import deleteAddressSchema from "../validations/address/updateAddress.validator";
import tokenValidatorSchema from "../validations/token.validator";

const routes = Router();

export const addressRoutes = () => {
  routes.use(
    expressYupMiddleware({
      schemaValidator: tokenValidatorSchema,
      propertiesToValidate: ["headers"],
    }),
    authUser
  );

  routes.post(
    "/",
    expressYupMiddleware({
      schemaValidator: createAddressSchema,
    }),
    addressCreateController
  );

  routes.get("/", verifyisAdmMiddleware, addressListController);

  routes.get("/self", addressListOneController);

  routes.patch(
    "/:addressId",
    expressYupMiddleware({
      schemaValidator: updateAddressSchema,
    }),
    addressUpdateController
  );

  routes.patch(
    "/adm/:addressId",
    expressYupMiddleware({
      schemaValidator: updateAddressSchema,
    }),
    authUser,
    addressUpdateAdmController
  );

  routes.delete(
    "/",
    expressYupMiddleware({
      schemaValidator: deleteAddressSchema,
    }),
    addressDeleteController
  );

  return routes;
};
