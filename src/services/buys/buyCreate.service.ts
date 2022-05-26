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

  console.log("MEU USUARUIO", userRepo)

  // BUSCAR COMPRAS COM ID DO USUARIO
  const repoBuys = AppDataSource.getRepository(Buys)
  const buys = await repoBuys.findOne({
    where : {
      user: userRepo?.buys
    }
  })


  //BUSCAR PRODUTO
  const prodRepo = await AppDataSource.getRepository(Product).findOne({
    where : {id : productId }
  })

  console.log("AQUIIIIIIIIIIIIIII ESTAAAAA PRODUTO", prodRepo)

  //GERAR ID DE COMPRA E STATUS
  //CRIAR ORDER COM ID DA COMPRA E O PRODUTO QUE RECEBI

  // SE NAOOOOO TIVER COMPRA DO USUARIO, CRIA UMA ORDER, E ADICIONA O PRODUTO
  if(!buys){
    // cria compra
    console.log("OTARIOOOOOOOOO")
    AppDataSource.getRepository(Buys).create({
      user: userRepo,
    })

  }
    // busca compra criada
    // const repoBuy = AppDataSource.getRepository(Buys)
    const repoBuy = await AppDataSource.getRepository(Buys).findOne({
      where : {user: userRepo?.buys}
    })

    console.log("REGINALDO",repoBuy)

    // if (!repoBuy) {
    //   throw new AppError(404, "Category not found");
    // }

    // cria order com a compra criada
    //   const orderRepo = AppDataSource.getRepository(Order)
    //   const order = orderRepo.create({
    //     buy: [repoBuy],
    //     product: [prodRepo]
    //  })
    // }

  
  


     // CRIANDO ORDER
     
        //ID DA BUY : ASDASDFAA123456
        // orderRepo.products = [...orderRepo.products, prodRepo]
        // orderRepo.subtotal = (orderRepo.subtotal + prodRepo.price)
        
      // }) 


//       await orderRepo.save(order);

//       return order;
//   }


// if (orderRepo && prodRepo) {

//     if (orderRepo.products.filter(prod => prod.id === prodRepo.id).length > 0) {
//         throw new AppError(409, "Product is already in the cart")
//     }

//     orderRepo.products = [...orderRepo.products, prodRepo]
//     orderRepo.subtotal = (orderRepo.subtotal + prodRepo.price)

//     await repo.save(orderRepo)

    return repoBuy



 
};

export default buyCreateService;