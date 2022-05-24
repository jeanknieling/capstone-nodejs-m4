import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryNotRegistered = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  if (categories.length === 0) {
    return res.status(404).json({
      status: "error",
      message: "Without categories registered",
    });
  }

  next();
};

export default categoryNotRegistered;
