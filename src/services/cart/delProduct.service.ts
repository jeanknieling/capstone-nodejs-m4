import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entity";
import { User } from "../../entities/user.entity";
import { fixedFloat } from "../../utils/checkDate";

const delProductService = async (userId: string, productId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const cartRepository = AppDataSource.getRepository(Cart);
  const cart = await cartRepository.findOne({
    where: {
      id: user?.cart.id,
    },
  });

  if (cart) {
    if (cart.products.filter((prod) => prod.id === productId).length === 0) {
      throw new Error("Product isn't in the cart");
    }

    cart.products = cart.products.filter((prod) => prod.id !== productId);
    cart.total = fixedFloat(
      cart.products.reduce((acc, prod) => acc + prod.price, 0)
    );

    await cartRepository.save(cart);

    return;
  }
};

export default delProductService;
