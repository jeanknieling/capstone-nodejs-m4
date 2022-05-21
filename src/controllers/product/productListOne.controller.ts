import { Request, Response } from "express";
import productListOneService from "../../services/product/productListOne.service";

const productListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await productListOneService(id);

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productListOneController;
