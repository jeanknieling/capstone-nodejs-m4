export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  likes: number;
  created_at: string;
  updated_at: string;
  category_id: number;
}

export interface IProductCreate {
  name: string;
  description: string;
  price: number;
  likes: number;
  category_id: number;
}
