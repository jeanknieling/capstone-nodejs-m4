import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productDeleteService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();

  const product = products.find((product) => product.id === id);
  await productRepository.delete(product!.id);

  const message = {
    status: true,
    message: "Product deleted with sucess!",
  };

  return message;
};

export default productDeleteService;
