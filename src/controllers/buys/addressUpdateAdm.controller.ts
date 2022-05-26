import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addressUpdateAdmService from "../../services/address/addressUpdateAdm.service";

const addressUpdateAdmController = async (req: Request, res: Response) => {
  try {
    const { addressId } = req.params;
    const { zipcode, street, number, neighborhood, complement } = req.body;

    const address = await addressUpdateAdmService(
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

export default addressUpdateAdmController;
