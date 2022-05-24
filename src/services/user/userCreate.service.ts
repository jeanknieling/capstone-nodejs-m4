import { IUser } from "./../../interfaces/user/index";
import { User } from "../../entities/user.entity";

import { IUserCreate } from "../../interfaces/user/index";

import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";
import { checkDate } from "../../utils/checkDate";

const userCreateService = async ({
  name,
  nickname,
  birthday,
  email,
  password,
  isAdm,
}: IUserCreate) => {
  const validDate = checkDate(birthday);
  if (!validDate) {
    throw new AppError(400, "Invalid date - correct format - (yyyy-mm-dd)");
  }

  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError(409, "Email Already Exists");
  }

  const user = userRepository.create({
    name: bcrypt.hashSync(name, 10),
    nickname,
    birthday,
    email,
    password: bcrypt.hashSync(password, 10),
    isAdm: isAdm ? (isAdm = isAdm) : (isAdm = false)
  });

  await userRepository.save(user);

  return user;
};

export default userCreateService;
