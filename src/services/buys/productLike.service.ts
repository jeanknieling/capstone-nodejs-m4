import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const productLikeService = async (id: string, like: boolean) => {
  const productRepository = AppDataSource.getRepository(Product);
  const products = await productRepository.find();

  const product = products.find((product) => product.id === id);

  if (product!.name === undefined) {
    throw new AppError(400, "Product not found");
  }

  let newLike = 0;
  if(like) {
    newLike = product!.likes + 1;
  } else {
    newLike = product!.likes - 1;
  }

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
