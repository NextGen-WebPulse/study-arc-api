import AppError from '../../errors/AppError';
import { IUser } from './user.interface';
import { User } from './user.model';

// User Save to DB
const userSaveToDb = async (payload: IUser) => {
  // Check User by User Name
  const user = await User.findOne({ userName: payload.userName });
  if (user) {
    throw new AppError(400, 'UserName Already Exist!');
  }

  // Check User By Email
  const isExistUserByEmail = await User.findOne({ email: payload?.email });
  if (isExistUserByEmail) {
    throw new AppError(400, 'This Email Already Exist!');
  }
  const result = await User.create(payload);
  return result;
};

// Get All User From  DB
const getAllUserFromDb = async () => {
  const result = await User.find();
  return result;
};

// User Save to DB
const getSingleUserFromDb = async (id: string) => {
  // Check User by User Id
  const user = await User.findById(id);
  if (!user) {
    throw new AppError(404, 'User Not Found');
  }

  return user;
};

export const UserServices = {
  userSaveToDb,
  getAllUserFromDb,
  getSingleUserFromDb,
};
