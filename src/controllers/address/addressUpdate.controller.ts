import { Request, Response } from "express";
import addressUpdateService from "../../services/address/addressUpdate.service";

const addressUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, discount_value } = req.body;

    const address = await addressUpdateService(
      parseInt(id),
      name,
      discount_value
    );

    return res.status(201).json({ message: "address updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default addressUpdateController;
