import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const product = await AppDataSource.getRepository(Product).find({
    where: {
      name: name
    }
  });

  if (product.length !== 0) {
    return res.status(400).json({
      status: "error",
      message: "Product already exists",
    });
  }

  next();
};

export default productAlreadyExists;