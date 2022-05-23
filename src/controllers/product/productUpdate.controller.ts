import { Request, Response } from "express";
import productUpdateService from "../../services/product/productUpdate.service";

const productUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, likes, category_id } = req.body;
    
    const product = await productUpdateService(
      id,
      name,
      description,
      price,
      likes,
      category_id
    );

    return res.status(201).json({ message: "product updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productUpdateController;
