import { Request, Response } from "express";
import addressCreateService from "../../services/address/addressCreate.service";

const addressCreateController = async (req: Request, res: Response) => {
  try {
    const { zipcode, street, number, neighborhood, complement, user_id } = req.body;

    const newaddress = await addressCreateService({
      zipcode,
      street,
      number,
      neighborhood,
      complement,
      user_id
    });

    return res.status(201).send(newaddress);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default addressCreateController;
