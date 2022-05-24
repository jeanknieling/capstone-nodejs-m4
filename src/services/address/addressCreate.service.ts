import { Address } from "../../entities/address.entity";
import { IAddressCreate , IAddress} from "../../interfaces/address/index";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

const addressCreateService = async ({
  zipcode, street, number, neighborhood, complement, user_id}: IAddressCreate) => {
  const addressRepository = AppDataSource.getRepository(Address);  

  const address = addressRepository.create({
    zipcode,
    street,
    number,
    neighborhood,
    complement,
    user : user_id
  });



  await addressRepository.save(address);

  return address;
};

export default addressCreateService;
