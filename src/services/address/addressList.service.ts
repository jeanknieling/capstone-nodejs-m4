import { Address } from "../../entities/address.entity";
import { AppDataSource } from "../../data-source";

const addressListService = async (id: string) => {

  const addressRepository = AppDataSource.getRepository(Address);


  const adresses = addressRepository.find(
    // where: {user : id } teste,
  );
  return adresses;
};

export default addressListService;
