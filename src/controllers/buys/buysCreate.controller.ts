import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addressCreateService from "../../services/address/addressCreate.service";
import buyCreateService from "../../services/buys/buyCreate.service";
// import jwt_decode from "jwt-decode"

const buysCreateController = async (req: Request, res: Response) => {
  try{
  const { productId } = req.body;
  const userId = req.userId

  const newBuy = await buyCreateService(
    productId,
    userId
  );

  return res.status(201).send(newBuy);
} catch (err) {
  if (err instanceof AppError) {
    handleError(err, res);
  }
}
};

export default buysCreateController;
