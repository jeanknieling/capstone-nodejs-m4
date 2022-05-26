import { Product } from "../../entities/product.entity";
import { AppDataSource } from "../../data-source";

const productListService = async () => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();

  return products;
};

export default productListService;
