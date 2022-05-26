import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import addProductService from "../../services/cart/addProduct.service";

const addProductController = async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const { productName } = req.body;

    const productInTheCart = await addProductService(userId, productName);

    return res.status(200).send(productInTheCart);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default addProductController;
