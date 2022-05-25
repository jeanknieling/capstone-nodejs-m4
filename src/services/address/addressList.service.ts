import { Address } from "../../entities/address.entity";
import { AppDataSource } from "../../data-source";

const addressListService = async (id: string) => {

  // const addressRepository = await AppDataSource.getRepository(Address).findBy({
  //   user: id
  // });
  // console.log("ADRESSSS REPO",addressRepository)

  // const adresses = addressRepository.find(
  //   // where: {user : id } teste,
  // );
  // return addressRepository;
};

export default addressListService;
