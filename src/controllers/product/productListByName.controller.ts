import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import productListByNameService from "../../services/product/productListByName.service";

const productListByNameController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const product = await productListByNameService(name);

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
    
  }
};

export default productListByNameController;
