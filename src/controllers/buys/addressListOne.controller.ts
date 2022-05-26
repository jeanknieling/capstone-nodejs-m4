import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addressListOneService from "../../services/address/addressListOne.service";

const addressListOneController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;

    const addresss = await addressListOneService(userId);

    return res.send(addresss);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};


export default addressListOneController;
