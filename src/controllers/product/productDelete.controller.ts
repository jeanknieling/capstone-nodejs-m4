import { Request, Response } from "express";
import productDeleteService from "../../services/product/productDelete.service";

const productDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await productDeleteService(id);

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productDeleteController;
