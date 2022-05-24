import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { Like } from "typeorm";

const productListByNameService = async (name: string) => {
  const products = await AppDataSource.getRepository(Product).find({
    where: { name: Like(`%${name}%`) },
  }); // Caso queira saber mais: https://orkhan.gitbook.io/typeorm/docs/find-options
  
  return products;
};

export default productListByNameService;
