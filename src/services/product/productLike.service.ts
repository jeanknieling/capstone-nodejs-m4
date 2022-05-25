import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const productLikeService = async (
  id: string,
  
) => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();

  const product = products.find((product) => product.id === id);

  if (product!.name === undefined) {
    throw new AppError(404, "Product not found");
  }

  const newLike = product!.likes+1;
  
  await productRepository.update(product!.id, {
    likes: newLike,    
  });

  const message = {
    status: true,
    message: "Product likes incremented with success!",
  };

  return message;
};

export default productLikeService;
