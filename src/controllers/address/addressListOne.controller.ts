import { Request, Response } from "express";
import addressListOneService from "../../services/address/addressListOne.service";

const addressListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const address = await addressListOneService(parseInt(id));

    return res.status(200).send(address);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default addressListOneController;
