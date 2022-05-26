import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors/appError";

const addressUpdateAdmService = async (
  addressId: number,
  zipcode: string,
  street: string,
  number: string,
  neighborhood: string,
  complement: string
) => {
  const addressCheck = await AppDataSource.getRepository(Address).findOne({
    where: {
      id: addressId,
    },
  });

  if (!addressCheck) {
    throw new AppError(400, "Address not found");
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

export default addressUpdateAdmService;
