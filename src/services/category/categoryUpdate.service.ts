import { AppDataSource } from "../../data-source";
import { Category } from "../../entities/category.entity";


const categoryUpdateService = async (
  id: number,
  name: string,
  discount_value: number
) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categories = await categoryRepository.find();

  const category = categories.find((category) => category.id === id);
  if (category!.id !== id) {
    throw new Error("Category not found");
  }

  const newName = !name ? category!.name : name;
  const newDiscount_value = !discount_value
    ? category!.discount_value
    : discount_value;
 
  await categoryRepository.update(category!.id, {
    name: newName,
    discount_value: newDiscount_value,
    
  });

  return true;
};

export default categoryUpdateService;
