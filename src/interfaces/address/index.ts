export interface IAddress {
  id: number;
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  user_id: string; 
}

export interface IAddressCreate {
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  user_id: string;
}
