import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const userListService = async () => {
  const userRepositpry = AppDataSource.getRepository(User);

  const users = userRepositpry.find();

  return users;
};
export default userListService;
