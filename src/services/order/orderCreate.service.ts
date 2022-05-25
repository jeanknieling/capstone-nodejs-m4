import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { Order } from "../../entities/order.entity";
import { categoriesRoutes } from "../../routes/categories.routes";
import { Product } from "../../entities/product.entity";

const orderCreateService = async (productId:string, userId:string) => {
  const userRepo = await AppDataSource.getRepository(User).findOne({
    where: {id: userId}
  })

  if(!userRepo){
    throw new AppError(400, "User not Found!")
  }

  console.log("MEU USUARUIO", userRepo)

  const repo = AppDataSource.getRepository(Order)
  const orderRepo = await repo.findOne({
      where: {
          id: userRepo?.order.id
      }
  })

  console.log(orderRepo)

  const prodRepo = await AppDataSource.getRepository(Product).findOne({
    where : {id : productId }
  })

  console.log("AQUIIIIIIIIIIIIIII ESTAAAAA PRODUTO", prodRepo)

  if(!orderRepo && prodRepo){
     const orderRepo = AppDataSource.getRepository(Order)
  
      const order = orderRepo.create({
        subtotal: 0,
        usuario: userRepo,
        products: [prodRepo]
        // orderRepo.products = [...orderRepo.products, prodRepo]
        // orderRepo.subtotal = (orderRepo.subtotal + prodRepo.price)
        
      }) 


      await orderRepo.save(order);

      return order;
  }


if (orderRepo && prodRepo) {

    if (orderRepo.products.filter(prod => prod.id === prodRepo.id).length > 0) {
        throw new AppError(409, "Product is already in the cart")
    }

    orderRepo.products = [...orderRepo.products, prodRepo]
    orderRepo.subtotal = (orderRepo.subtotal + prodRepo.price)

    await repo.save(orderRepo)

    return orderRepo
}


 
};

export default orderCreateService;
