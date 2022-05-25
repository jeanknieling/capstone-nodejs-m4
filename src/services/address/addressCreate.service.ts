import { Address } from "../../entities/address.entity";
import { IAddressCreate, IAddress } from "../../interfaces/address/index";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const addressCreateService = async ({
  zipcode,
  street,
  number,
  neighborhood,
  complement,
  user_id,
}: IAddressCreate) => {
  const addressRepository = AppDataSource.getRepository(Address);
  const usuario = await AppDataSource.getRepository(User).findOne({
    where: { id: user_id },
  });

  if (!usuario) {
    throw new AppError(400, "User not found!");
  }
  const address = addressRepository.create({
    zipcode,
    street,
    number,
    neighborhood,
    complement,
    usuario: usuario,
  });

  await addressRepository.save(address);

  return address;
};

export default addressCreateService;
