import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";


const addressUpdateService = async (
  id: number,
  zipcode: string,
  street: string,
  number: string,
  neighborhood: string,
  complement: string,
  user_id: string
) => {
  const addressRepository = AppDataSource.getRepository(Address);

  const adresses = await addressRepository.find();

  const address = adresses.find((address) => address.id === id);
  if (address!.id !== id) {
    throw new Error("Address not found");
  }

  const newZipcode = !zipcode ? address!.zipcode : zipcode;
  const newStreet = !street ? address!.street : street;
  const newNumber = !number ? address!.number : number;
  const newNeighborhood = !neighborhood ? address!.neighborhood : neighborhood;
  const newComplement = !complement ? address!.complement : complement;
  const newUser_id = !user_id ? address!.user_id : user_id;
  
  await addressRepository.update(address!.id, {
    zipcode: newZipcode,
    street: newStreet,
    number: newNumber,
    neighborhood: newNeighborhood,
    complement: newComplement,
    user_id: newUser_id,
  });

  return true;
};

export default addressUpdateService;
