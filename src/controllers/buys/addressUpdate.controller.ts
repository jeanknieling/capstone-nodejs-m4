import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addressUpdateService from "../../services/address/addressUpdate.service";

const addressUpdateController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const { addressId } = req.params;
    const { zipcode, street, number, neighborhood, complement } = req.body;

    const address = await addressUpdateService(
      userId,
      Number(addressId),
      zipcode,
      street,
      number,
      neighborhood,
      complement,
    );

    return res.json(address);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addressUpdateController;
