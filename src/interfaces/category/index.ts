export interface ICategory {
  id: string;
  name: string;
  discount_value: number;
}

export interface ICategoryCreate {
  name: string;
  discount_value: number;
}
