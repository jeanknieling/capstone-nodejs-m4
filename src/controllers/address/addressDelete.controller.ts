import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addressDeleteService from "../../services/address/addressDelete.service";

const addressDeleteController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const { addressId } = req.body;

    const addresss = await addressDeleteService(userId, addressId);

    return res.send(addresss);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressDeleteController;
