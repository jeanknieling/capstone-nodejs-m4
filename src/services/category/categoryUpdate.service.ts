import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";

const categoryUpdateService = async (
  id: string,
  name: string,
  discount_value: number
) => {
  const categoryRepository = AppDataSource.getRepository(Category);
  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === Number(id));

  const newName = !name ? category!.name : name;
  const newDiscount_value = !discount_value
    ? category!.discount_value
    : discount_value;

  await categoryRepository.update(category!.id, {
    name: newName,
    discount_value: newDiscount_value,
  });

  const message = {
    status: true,
    message: "Category updated with success!",
  };

  return message;
};

export default categoryUpdateService;
