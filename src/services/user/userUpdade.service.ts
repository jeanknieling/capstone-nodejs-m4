import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

import brcypt from "bcrypt";

const userUpdateService = async (
  id: string,
  name: string,
  password: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);

  if (password) {
    if (brcypt.compareSync(password, account!.password)) {
      throw new Error("Inform a diferent password");
    }
    const newPassword = brcypt.hashSync(password, 10);
    await userRepository.update(account!.id, { password: newPassword });
  }

  const newName = name;

  await userRepository.update(account!.id, { name: newName });

  return account;
};

export default userUpdateService;
