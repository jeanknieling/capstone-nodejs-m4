import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryAlreadyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((cat) => cat.name === name);

  if (category !== undefined) {
    return res.status(400).json({
      status: "error",
      message: "Category already exists",
    });
  }

  next();
};

export default categoryAlreadyExists;
