import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";

const productListByCategoryService = async (categoryName: string) => {
  const products = await AppDataSource.getRepository(Product).find();
  const productsByCategory = products.filter(
    (product) => product.category.name === categoryName
  );

  return productsByCategory;
};

export default productListByCategoryService;
