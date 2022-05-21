import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";
import { Category } from "../../entities/category.entity";

const productListByCategoryService = async (categoryName: string) => {
  
  const products = await AppDataSource.getRepository(Product).find({
    where: {
      category: await AppDataSource.getRepository(Category).find({
        where: { name: categoryName },
      }),
    },
  });

  return products;
};

export default productListByCategoryService;
