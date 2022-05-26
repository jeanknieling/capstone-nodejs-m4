import { Address } from "../../entities/address.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";

const addressListService = async (userId: string) => {
  const userCheck = await AppDataSource.getRepository(User).findOne({
    where : { id : userId}
    })

    if(!userCheck){
    throw new AppError(400, "User not found!")
    }

  const addressRepository = await AppDataSource.getRepository(Address).findBy({
    user: userCheck
  });


  return addressRepository;
};

export default addressListService;
