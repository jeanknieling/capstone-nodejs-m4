import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";

import userDeleteSelfService from "../../services/user/userDeleteSelf.service";

const userDeleteSelfController = async (req: Request, res: Response) => {
  try {
    const id = req.userId;
    console.log(id)

    const user = await userDeleteSelfService(id);

    return res.status(200).json({ message: "User deleted" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userDeleteSelfController;
