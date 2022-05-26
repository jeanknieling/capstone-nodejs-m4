import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { User } from "../../entities/user.entity";
import { Product } from "../../entities/product.entity";
import { Buy } from "../../entities/buy.entity";

const buyCreateService = async (productId: string, userId: string) => {
  const userRepository = await AppDataSource.getRepository(User).findOne({
    where: { id: userId },
  });

  if (!userRepository) {
    throw new AppError(400, "User not Found!");
  }

  const buyRepository = AppDataSource.getRepository(Buy);
  const buys = await buyRepository.findBy({
    user: userRepository,
  });

  const productRepository = await AppDataSource.getRepository(Product).findOne({
    where: { id: productId },
  });

  if (!productRepository) {
    throw new AppError(400, "Product not found");
  }

  if (!buys.length) {
    const buyNew = AppDataSource.getRepository(Buy);
    const buy = buyNew.create({
      user: userRepository,
      product: [productRepository],
    });
    await buyNew.save(buy);

    return buy;
  }

  if (buys[0].product.filter((prod) => prod.id === productRepository.id).length > 0) {
    throw new AppError(409, "Product is already in the buys");
  }

  buys[0].product = [...buys[0].product, productRepository];
  await buyRepository.save(buys);

  return buys[0];
};

export default buyCreateService;
