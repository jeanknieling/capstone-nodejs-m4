import { Router } from "express";

import { authUser } from "../middlewares/user/authUser.middleware";
import { verifyisAdmMiddleware } from "../middlewares/user/authUser.middleware";

const categoriesRoutes = Router();

categoriesRoutes.post("/", )
categoriesRoutes.get("/", )
categoriesRoutes.patch("/", )
categoriesRoutes.delete("/", )

export default categoriesRoutes;