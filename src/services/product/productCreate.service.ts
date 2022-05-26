import { Product } from "../../entities/product.entity";
import { Category } from "../../entities/category.entity";
import { IProductCreate } from "../../interfaces/product/index";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { ILike } from "typeorm";

const productCreateService = async ({
  name,
  description,
  price,
  category,
}: IProductCreate) => {
  const categoryName = await AppDataSource.getRepository(Category).findOne({
    where: { name: ILike(`%${category}%`) },
  });

  if (!categoryName) {
    throw new AppError(404, "Category not found");
  }

  const productRepository = AppDataSource.getRepository(Product);
  const product = productRepository.create({
    name,
    description,
    price,
    category: categoryName,
  });

  await productRepository.save(product);

  return product;
};

export default productCreateService;
