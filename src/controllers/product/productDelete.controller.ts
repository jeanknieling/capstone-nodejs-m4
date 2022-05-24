import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import productDeleteService from "../../services/product/productDelete.service";

const productDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await productDeleteService(id);

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    }
  
};

export default productDeleteController;
