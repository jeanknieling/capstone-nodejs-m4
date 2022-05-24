import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryNotFoundByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body;
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const categoryByName = categories.find((cat) => cat.name === category);

  if (categoryByName === undefined) {
    return res.status(404).json({
      status: "error",
      message: "Category not found",
    });
  }

  next();
};

export default categoryNotFoundByName;
