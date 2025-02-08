import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import jwt from 'jsonwebtoken';
// Auth Login
const authLogin = async (payload: { email: string; password: string }) => {
  // Check User by User Id
  const user = await User.findOne({
    $or: [{ email: payload.email }, { userName: payload.email }],
  });
  if (!user) {
    throw new AppError(404, 'User Not Found');
  }

  // Check User Is Deleted Or Not
  if (user?.isDeleted) {
    throw new AppError(400, 'User Not Found Bacuase User is Deleted!');
  }
  // Check User Status Block Or Not
  if (user?.accountStatus === 'block') {
    throw new AppError(400, 'User Blocked!');
  }

  // Check Password
  if (!(await User.isCheckPassword(payload.password, user?.password))) {
    throw new AppError(403, 'Invalid Credentials!');
  }

  // Generate Access Token
  const jwtPayload = {
    userEmail: user?.email,
    role: user?.role,
  };
  // Generate Access Token
  const accessToken = jwt.sign(jwtPayload, config.JWT_ACCESS_TOKEN as string, {
    expiresIn: '10d',
  });
  return {
    accessToken,
  };
};

export const AuthServices = {
  authLogin,
};
