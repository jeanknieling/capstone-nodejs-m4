import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import productUpdateService from "../../services/product/productUpdate.service";

const productUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, description, price, category } = req.body;
    
    const product = await productUpdateService(
      id,
      name,
      description,
      price,
      category
    );

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default productUpdateController;
