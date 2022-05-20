import { Category } from "../../entities/category.entity";
import { AppDataSource } from "../../data-source";

const categoryListService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = categoryRepository.find();
  return categories;
};

export default categoryListService;
