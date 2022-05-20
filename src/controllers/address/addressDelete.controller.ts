import { Request, Response } from "express";
import addressDeleteService from "../../services/address/addressDelete.service";

const addressDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const address = await addressDeleteService(parseInt(id));

    return res.status(200).json({ message: "Address deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default addressDeleteController;
