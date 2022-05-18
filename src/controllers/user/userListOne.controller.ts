import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListOneService from "../../services/user/userListOne.service";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const email = req.userEmail;

    const user = await userListOneService(email);

    return res.status(201).send(user);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default userListOneController;
