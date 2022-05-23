import { Request, Response } from "express";
import productCreateService from "../../services/product/productCreate.service";

const productCreateController = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category } = req.body;

    const newProduct = await productCreateService({
      name,
      description,
      price,
      category,
    });

    return res.status(201).send(newProduct);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default productCreateController;
