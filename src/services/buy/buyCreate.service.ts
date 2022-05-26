import { AppDataSource } from "../../data-source";
import { Buy } from "../../entities/buy.entity";
import { Cart } from "../../entities/cart.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const buyCreateService = async (userId: string) => {
  const cartRepository = AppDataSource.getRepository(Cart);
  const userRepository = AppDataSource.getRepository(User);
  const buyRepository = AppDataSource.getRepository(Buy);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const cart = await cartRepository.findOne({
    where: {
      id: user?.cart.id,
    },
  });

  if (cart && user) {
    if (cart.products.length === 0) {
      throw new AppError(400, "Cart is empty");
    }

    const buy = new Buy();
    buy.user = user;
    buy.products = cart.products;
    buy.total = cart.total;

    buyRepository.create(buy);
    await buyRepository.save(buy);

    cart.products = [];
    cart.total = 0;
    await cartRepository.save(cart);

    const newBuy = buyRepository.find({
      where: {
        id: buy.id,
      },
    });

    return newBuy;
  }
};

export default buyCreateService;
