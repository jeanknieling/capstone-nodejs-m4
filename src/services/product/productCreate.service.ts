import { Product } from "../../entities/product.entity";
import { Category } from "../../entities/category.entity";
import { IProductCreate } from "../../interfaces/product/index";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
const productCreateService = async ({
  name,
  description,
  price,
  category,
}: IProductCreate) => {
  const productRepository = AppDataSource.getRepository(Product);
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const categoryName = categories.find((item) => {item.name === category});
  console.log(categoryName)

  if (!categoryName) {
    throw new AppError(404, "Category not found");
  }

  const product = new Product();
  product.name = name;
  product.description = description;
  product.price = price;
  product.category = categoryName;
  productRepository.create(product);

  await productRepository.save(product);

  return product;
};
export default productCreateService;
