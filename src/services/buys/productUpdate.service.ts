import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const productUpdateService = async (
  id: string,
  name: string,
  description: string,
  price: number,
  category: string
) => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();

  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const categoryDatabase = categories.find((cat) => cat.name === category);
  const product = products.find((product) => product.id === id);

  if (product!.name === undefined) {
    throw new AppError(404, "Product not found");
  }

  const newName = !name ? product!.name : name;
  const newDescription = !description ? product!.description : description;
  const newPrice = !price ? product!.price : price;
  const newCategory = categoryDatabase;

  await productRepository.update(product!.id, {
    name: newName,
    description: newDescription,
    price: newPrice,
    category: newCategory,
  });

  const message = {
    status: true,
    message: "Product updated with success!",
  };

  return message;
};

export default productUpdateService;
