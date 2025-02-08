import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';

/**
 * @Description  Get Single User
 * @param ''
 * @returns Response with data
 * @Method GET
 */

const authLogin = catchAsync(async (req, res) => {
  const result = await AuthServices.authLogin(req.body);
  res.cookie('accessToken', result?.accessToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });
  sendResponse(res, {
    success: true,
    message: 'User Login Successful',
    data: result,
  });
});

// Logout User
const logoutUser = catchAsync(async (req, res) => {
  res.clearCookie('accessToken');
  sendResponse(res, {
    success: true,
    message: 'User Logout Successful',
    data: null,
  });
});

export const AuthControllers = {
  authLogin,
  logoutUser,
};
