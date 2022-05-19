import { User } from "../../entities/user.entity";

import { IUserCreate } from "../../interfaces/user/index";

import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const userCreateService = async ({
  name,
  nickname,
  birthday,
  email,
  password,
  isAdm,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  console.log(birthday);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "Email Alredy Exists");
  }

  const user = new User();

  user.name = name;
  user.nickname = nickname;
  user.birthday = birthday;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.isAdm = isAdm;
  user.created_at = new Date();
  user.updated_at = new Date();

  userRepository.create(user);

  await userRepository.save(user);

  return user;
};

export default userCreateService;
