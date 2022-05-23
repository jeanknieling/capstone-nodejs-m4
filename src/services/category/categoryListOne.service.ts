import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryListOneService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === Number(id));

  return category;
};

export default categoryListOneService;
