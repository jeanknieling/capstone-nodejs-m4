import { Request, Response } from "express";
import productListService from "../../services/product/productList.service";

const productListController = async (req: Request, res: Response) => {
  try {
    const products = await productListService();

    return res.send(products);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productListController;
