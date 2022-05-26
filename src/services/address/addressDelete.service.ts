import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const addressDeleteService = async (userId: string, addressId: number) => {
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
    throw new AppError(400, "Address not found!");
  }

  const userAddressCheck = userCheck.address.some(
    (address) => address.id === addressCheck.id
  );

  if (!userAddressCheck) {
    throw new AppError(400, "This address does not belong to you");
  }

  await AppDataSource.getRepository(Address).delete(addressCheck);

  return {
    message: "Address deleted with success!",
  };
};

export default addressDeleteService;
