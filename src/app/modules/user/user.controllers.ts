import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.services';
/**
 * @Description  Create User Acount
 * @param ''
 * @returns Response with data
 * @Method POST
 */

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.userSaveToDb(req.body);
  sendResponse(res, {
    success: true,
    message: 'User Created Successful',
    data: result,
  });
});

/**
 * @Description  Get All Users
 * @param ''
 * @returns Response with data
 * @Method GET
 */

const getAllUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDb();
  sendResponse(res, {
    success: true,
    message: 'Users Retrieved Successful',
    data: result,
  });
});

/**
 * @Description  Get Single User
 * @param id
 * @returns Response with data
 * @Method GET
 */

const getSingleUser = catchAsync(async (req, res) => {
  const result = await UserServices.getSingleUserFromDb(req?.params?.id);
  sendResponse(res, {
    success: true,
    message: 'Single User Retrieved Successful',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
};
