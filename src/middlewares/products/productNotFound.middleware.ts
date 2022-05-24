import { NextFunction, Request, Response } from "express";
import { Like } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const { name } = req.body;
  const product = await AppDataSource.getRepository(Product).find({
    where: {
      name: Like(`%${name}%`)
    }
  });

  if (product.length === 0) {
    return res.status(404).json({
      error: "Error",
      message: "Product not found"
    })
  }

  next();
};

export default productNotFound;