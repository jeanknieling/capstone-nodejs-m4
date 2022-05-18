import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userListService from "../../services/user/userList.service";

const userListController = async (req: Request, res: Response) => {
  try {
    const users = await userListService();

    return res.send(users);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};
export default userListController;
