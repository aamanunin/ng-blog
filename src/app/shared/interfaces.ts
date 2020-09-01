export interface IUser {
  email: string;
  password: string;
}

export interface IPost {
  id?: string;
  title: string;
  text: string;
  author: string;
  date: Date;
}
