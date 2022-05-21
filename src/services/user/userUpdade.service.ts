import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

import brcypt from "bcrypt";

const userUpdateService = async (
  id: string,
  nickname: string,
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

  if (nickname) {
    const newNickName = nickname;

    await userRepository.update(account!.id, { nickname: newNickName });
  }

  const usersUpdated = await userRepository.find();
  const accountUpdated = usersUpdated.find((user) => user.id === id);

  return accountUpdated;
};

export default userUpdateService;
