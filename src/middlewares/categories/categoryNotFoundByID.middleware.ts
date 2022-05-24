import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryNotFound = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === Number(id));

  if (category === undefined) {
    return res.status(404).json({
      status: "error",
      message: "Category not found",
    });
  }

  next();
};

export default categoryNotFound;
