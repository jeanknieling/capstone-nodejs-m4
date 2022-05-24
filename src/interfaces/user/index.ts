export interface IUser {
  id: string;
  name: string;
  nickname: string;
  birthday: Date;
  email: string;
  password: string;
  isAdm: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IUserCreate {
  name: string;
  nickname: string;
  birthday: Date;
  email: string;
  password: string;
  isAdm?: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}
