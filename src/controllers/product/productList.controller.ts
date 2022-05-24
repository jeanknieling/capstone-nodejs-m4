import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import productListService from "../../services/product/productList.service";

const productListController = async (req: Request, res: Response) => {
  try {
    const products = await productListService();

    return res.status(200).send(products);
  } catch (err) {
    if (err instanceof Error) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
};

export default productListController;
