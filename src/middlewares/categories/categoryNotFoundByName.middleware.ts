import { NextFunction, Request, Response } from "express";
import { ILike } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryNotFoundByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body;
  const categoryRepository = AppDataSource.getRepository(Category);
 
  const categories = await categoryRepository.findBy({
    name: ILike(`%${category}%`)
  });

  if (!categories.length) {
    return res.status(404).json({
      status: "error",
      message: "Category not found",
    });
  }

  next();
};

export default categoryNotFoundByName;
