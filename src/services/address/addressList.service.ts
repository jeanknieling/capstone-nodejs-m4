import { Address } from "../../entities/address.entity";
import { AppDataSource } from "../../data-source";

const addressListService = async () => {
  const addressRepository = AppDataSource.getRepository(Address);
  const adresses = addressRepository.find();
  return adresses;
};

export default addressListService;
