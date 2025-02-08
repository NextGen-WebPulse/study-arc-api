import { Router } from 'express';
import { UserControllers } from './user.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidationSchemas } from './uservalidation.schema';

const userRouter = Router();

// Create User
userRouter.post(
  '/create',
  validateRequest(UserValidationSchemas.UserCreateValidationSchema),
  UserControllers.createUser,
);

// Get All Users
userRouter.get('/', UserControllers.getAllUsers);

// Get All Users
userRouter.get('/:id', UserControllers.getSingleUser);

export const UserRoutes = userRouter;
