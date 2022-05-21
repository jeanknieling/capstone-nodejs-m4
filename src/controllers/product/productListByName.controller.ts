import { Request, Response } from "express";
import productListByNameService from "../../services/product/productListByName.service";

const productListByNameController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const product = await productListByNameService(name);

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

export default productListByNameController;
