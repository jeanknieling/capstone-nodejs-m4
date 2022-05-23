import { Product } from "../../entities/product.entity";


import { IProductCreate } from "../../interfaces/product/index";

import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors/appError";

const productCreateService = async ({
  name,
  description,
  price,
  category_id,
}: IProductCreate) => {
  const productRepository = AppDataSource.getRepository(Product);

  

  const product = new Product();
  product.name = name;
  product.description = description;
  product.price = price;
  product.category_id = category_id;

  productRepository.create(product);
  await productRepository.save(product);

  return product;
};

export default productCreateService;
