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
  birthday: Date;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
