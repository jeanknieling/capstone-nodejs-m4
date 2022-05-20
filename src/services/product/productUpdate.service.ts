import { AppDataSource } from "../../data-source";
import { Product } from "../../entities/product.entity";


const productUpdateService = async (
  id: string,
  name: string,
  description: string,
  price: number,
  likes: number,
  category_id: number,
) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const product = products.find((product) => product.id === id);
  if (product!.id !== id) {
    throw new Error("Product not found");
  }
  
  const newName = !name ? product!.name : name;
  const newDescription = !description ? product!.description : description;
  const newPrice = !price ? product!.price : price;
  const newLikes = !likes ? product!.likes : likes;
  const newCategory_id = !category_id ? product!.category_id : category_id;
  await productRepository.update(product!.id, {
    name: newName,
    description: newDescription,
    price: newPrice,
    likes: newLikes,
    category_id: newCategory_id,
  });

  return true;
};

export default productUpdateService;
