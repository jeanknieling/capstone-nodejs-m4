import { Request, Response } from "express";
import addressCreateService from "../../services/address/addressCreate.service";
import buyCreateService from "../../services/buys/buyCreate.service";
// import jwt_decode from "jwt-decode"

const buysCreateController = async (req: Request, res: Response) => {
  const { productId } = req.body;
  const userId = req.userId

  const newBuy = await buyCreateService(
    productId,
    userId
  );

  return res.status(201).send(newBuy);
};

export default buysCreateController;
