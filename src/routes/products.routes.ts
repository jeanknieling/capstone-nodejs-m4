import { Router } from "express";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";

const productsRoutes = Router();

productsRoutes.post("/", )
productsRoutes.get("/", )
productsRoutes.patch("/", )
productsRoutes.delete("/", )

export default productsRoutes;