import { Category } from "../../entities/category.entity";


import { ICategoryCreate } from "../../interfaces/category/index";

import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors/appError";

const categoryCreateService = async ({
  name,
  discount_value,  
}: ICategoryCreate) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const category = new Category();
  category.name = name;
  category.discount_value = discount_value;

  categoryRepository.create(category);
  await categoryRepository.save(category);

  return category;
};

export default categoryCreateService;
