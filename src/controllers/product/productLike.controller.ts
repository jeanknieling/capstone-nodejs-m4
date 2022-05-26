import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import productLikeService from "../../services/product/productLike.service";

const productLikeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { like } = req.body;

    const product = await productLikeService(id, like);

    return res.status(200).send(product);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default productLikeController;
