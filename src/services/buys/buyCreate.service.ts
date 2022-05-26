import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError"; 
import { User } from "../../entities/user.entity";
import { Order } from "../../entities/order.entity";
import { categoriesRoutes } from "../../routes/categories.routes";
import { Product } from "../../entities/product.entity";
import { Buys } from "../../entities/buys.entity";

const buyCreateService = async (productId:string, userId:string) => {
  // BUSCAR USUARIO
  const userRepo = await AppDataSource.getRepository(User).findOne({
    where: {id: userId}
  })

  if(!userRepo){
    throw new AppError(400, "User not Found!")
  }

  console.log("MEU USUARUIO", productId)

  // BUSCAR COMPRAS COM ID DO USUARIO
  const repoBuys = AppDataSource.getRepository(Buys)
  const buys = await repoBuys.findBy({
         usuario: userRepo

  })
 console.log("AQUIIIIIIIIII SOCORRRRRRRO",buys)

  //BUSCAR PRODUTO
  const prodRepo = await AppDataSource.getRepository(Product).findOne({
    where : {id : productId }
  })


  if(!prodRepo){
    throw new AppError(400, "Vai tomae no cu!")
  }

  // SE NAOOOOO TIVER COMPRA DO USUARIO, CRIA UMA ORDER, E ADICIONA O PRODUTO
  if(!buys.length){
    // cria compra
    console.log("OTARIOOOOOOOOO")
    const buyNew = AppDataSource.getRepository(Buys)
    const compra = buyNew.create({
      usuario: userRepo,
      product: [prodRepo]
   })
   await buyNew.save(compra);

   return compra

  }
    

  // if (buys.length) {
  //   console.log("BUYSSSS NO IFFFFFFFFFFF", buys)

    if (buys[0].product.filter(prod => prod.id === prodRepo.id).length > 0) {
        throw new AppError(409, "Product is already in the buys")
    }

    buys[0].product = [...buys[0].product, prodRepo]
    // buys.total = (orderRepo.subtotal + prodRepo.price)

    await repoBuys.save(buys)

    return buys[0]



}

export default buyCreateService;