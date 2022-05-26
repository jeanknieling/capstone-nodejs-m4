import { Request, Response } from "express";
import addressCreateService from "../../services/address/addressCreate.service";

const addressCreateController = async (req: Request, res: Response) => {
  const { zipcode, street, number, neighborhood, complement } = req.body;

  const newaddress = await addressCreateService({
    zipcode,
    street,
    number,
    neighborhood,
    complement,
    user_id: req.userId,
  });

  return res.status(201).send(newaddress);
};

export default addressCreateController;
