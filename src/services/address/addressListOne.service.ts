import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";

const addressListOneService = async (id: number) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const adresses = await addressRepository.find();

  const address = adresses.find((address) => address.id === id);

  return address;
};

export default addressListOneService;
