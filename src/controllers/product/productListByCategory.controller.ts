import { Request, Response } from "express";
import productListByCategoryService from "../../services/product/productListByCategory.service";

const productListByCategoryController = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;

    const products = await productListByCategoryService(category);

    return res.status(200).send(products);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productListByCategoryController;
