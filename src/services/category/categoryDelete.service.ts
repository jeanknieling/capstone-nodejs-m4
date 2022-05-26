import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryDeleteService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === Number(id));
  await categoryRepository.delete(category!.id);

  const message = {
    status: true,
    message: "Category deleted with success!",
  };

  return message;
};

export default categoryDeleteService;
