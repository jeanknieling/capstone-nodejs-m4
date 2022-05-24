import { Request, Response } from "express";
import productUpdateService from "../../services/product/productUpdate.service";

const productUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, likes, category } = req.body;
    
    const product = await productUpdateService(
      id,
      name,
      description,
      price,
      category
    );

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productUpdateController;
