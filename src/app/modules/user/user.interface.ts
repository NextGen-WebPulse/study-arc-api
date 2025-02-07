/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUserAddress {
  country: string;
  state: string;
  city: string;
  zip_code: string;
}
export interface IUser {
  name: string;
  email: string;
  phone: string;
  userName: string;
  gender: 'Male' | 'Female';
  password: string;
  role: 'Student' | 'Trainer' | 'SuperAdmin';
  image: string;
  dateOfBirth: string;
  address: IUserAddress;
  accountStatus: 'block' | 'active';
  isDeleted: boolean;
}

export interface UserModel extends Model<IUser> {
  isCheckPassword(
    myPlaintextPassword: string,
    hashPass: string,
  ): Promise<boolean>;
}
