import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import delProductService from "../../services/cart/delProduct.service";

const delProductController = async (req: Request, res: Response) => {
  try {
    const { userId } = req;
    const { productId } = req.params;

    const productDeleted = delProductService(userId, productId);

    return res.sendStatus(204);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default delProductController;