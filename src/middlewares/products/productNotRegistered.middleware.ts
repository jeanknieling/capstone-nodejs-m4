import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productNotRegistered = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const { id } = req.params;
  const productsRepository = AppDataSource.getRepository(Product);
  const product = await productsRepository.find({
    where: {
      id: id
    }
  });

  if (product.length === 0){
    return res.status(404).json({
      status: "error",
      message: "Product not registered",
    });
  }

  next();
};

export default productNotRegistered;