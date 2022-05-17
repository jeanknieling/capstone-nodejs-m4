export interface IUser {
  id: string;
  name: string;
  surname: string;
  birthday: Date;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface IUserCreate {
  name: string;
  surname: string;
  birthday: number;
  email: string;
  password: string;
}