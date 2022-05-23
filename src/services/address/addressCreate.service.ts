import { Address } from "../../entities/address.entity";
import { IAddressCreate } from "../../interfaces/address/index";
import { AppDataSource } from "../../data-source";

import { AppError } from "../../errors/appError";

const addressCreateService = async ({
  zipcode,
  street,
  number,
  neighborhood,
  complement,
  user_id
}: IAddressCreate) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const address = new Address();
  address.zipcode = zipcode;
  address.street = street;
  address.number = number;
  address.neighborhood = neighborhood;
  address.complement = complement;
  address.user_id = user_id;

  addressRepository.create(address);
  await addressRepository.save(address);

  return address;
};

export default addressCreateService;
