export interface IOrders {
  product: [];
  
}

export interface IOrdersCreate {
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  user_id: string;
}
