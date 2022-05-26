import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import productListByCategoryService from "../../services/product/productListByCategory.service";

const productListByCategoryController = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;

    const products = await productListByCategoryService(category);

    return res.status(200).send(products);
  } catch (err) {
    if (err instanceof Error) {
      if (err instanceof AppError) {
        handleError(err, res);
      }
    }
  }
};

export default productListByCategoryController;
