export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  likes: number;
  created_at: Date;
  updated_at: Date;
  category: number;
}

export interface IProductCreate {
  name: string;
  description: string;
  price: number;
  category: string;
}
