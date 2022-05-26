import { Address } from "../../entities/address.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const addressListService = async (id: string) => {
  const address = AppDataSource.getRepository(Address).find()

  return address;
};

export default addressListService;
