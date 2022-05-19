import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productListOneService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const product = products.find((product) => product.id === id);

  return product;
};

export default productListOneService;
