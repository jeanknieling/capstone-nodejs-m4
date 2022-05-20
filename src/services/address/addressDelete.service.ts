import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";

const addressDeleteService = async (id: number) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const adresses = await addressRepository.find();

  const address = adresses.find((address) => address.id === id);

  await addressRepository.delete(address!.id);

  return true;
};

export default addressDeleteService;
