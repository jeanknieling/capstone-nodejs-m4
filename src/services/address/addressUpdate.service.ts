import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const addressUpdateService = async (
  userId: string,
  addressId: number,
  zipcode: string,
  street: string,
  number: string,
  neighborhood: string,
  complement: string
) => {
  const userCheck = await AppDataSource.getRepository(User).findOne({
    where: { id: userId },
  });

  if (!userCheck) {
    throw new AppError(400, "User not found!");
  }

  const addressCheck = await AppDataSource.getRepository(Address).findOne({
    where: {
      id: addressId,
    },
  });

  if (!addressCheck) {
    throw new AppError(400, "Address not found");
  }

  const userAddressCheck = userCheck.address.some((address) => {
    return address.id === addressCheck.id;
  });

  if (!userAddressCheck) {
    throw new AppError(401, "This address does not belong to you");
  }

  zipcode && (addressCheck.zipcode = zipcode);
  street && (addressCheck.street = street);
  number && (addressCheck.number = number);
  neighborhood && (addressCheck.neighborhood = neighborhood);
  complement && (addressCheck.complement = complement);

  AppDataSource.getRepository(Address).update(addressCheck.id, {
    zipcode,
    street,
    number,
    neighborhood,
    complement,
  });

  const message = {
    status: true,
    message: "Address updated with success!",
  };

  return message;
};

export default addressUpdateService;
