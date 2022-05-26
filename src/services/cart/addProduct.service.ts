import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { fixedFloat } from "../../utils/checkDate";

const addProductService = async (userId: string, productName: string) => {
  const userRepostory = AppDataSource.getRepository(User);
  const user = await userRepostory.findOne({
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

  const productRepository = AppDataSource.getRepository(Product);
  const product = await productRepository.findOne({
    where: {
      name: productName,
    },
  });

  if (!product) {
    throw new AppError(400, "Product not found");
  }

  if (cart && product) {

    console.log("CART", cart)
    if (cart.products.filter((prod) => prod.name === product.name).length) {
      console.log("PROD", product.name )
      throw new AppError(400, "Product is already in the cart");
    }

    cart.products = [...cart.products, product];
    cart.total = fixedFloat(cart.total + product.price);

    await cartRepository.save(cart);

    const updatedCart = await cartRepository.findOne({
      where: {
        id: user?.cart.id,
      },
    });

    console.log("UPDATED", updatedCart)

    return updatedCart;
  }
};

export default addProductService;
