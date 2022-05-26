import { ILike, In, Like } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const productListByCategoryService = async (categoryName: string) => {
  const catId = await AppDataSource.getRepository(Category).findBy({
    name: ILike(`%${categoryName}%`),
  });

  const prod = await AppDataSource.getRepository(Product).findBy({
    category: catId,
  });

  if (!prod) {
    throw new AppError(400, "Product not found!");
  }

  return prod;
};

export default productListByCategoryService;
