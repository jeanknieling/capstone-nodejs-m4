import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryDeleteService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === id);

  await categoryRepository.delete(category!.id);

  return true;
};

export default categoryDeleteService;
