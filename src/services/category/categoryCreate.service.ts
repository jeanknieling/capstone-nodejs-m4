import { Category } from "../../entities/category.entity";

import { ICategoryCreate } from "../../interfaces/category/index";
import { AppDataSource } from "../../data-source";

const categoryCreateService = async ({ name }: ICategoryCreate) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  
  const category = new Category();
  category.name = name;

  categoryRepository.create(category);
  await categoryRepository.save(category);

  return category;
};

export default categoryCreateService;
