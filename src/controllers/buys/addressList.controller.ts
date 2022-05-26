import { Request, Response } from "express";
import addressListService from "../../services/address/addressList.service";

const addressListController = async (req: Request, res: Response) => {
  const id = req.userId
  
  try {
    const addresss = await addressListService(id);

    return res.send(addresss);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default addressListController;
