import { Router } from 'express';
import { AuthValidationSchemas } from './authValidation.Schemas';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controllers';

const authRouter = Router();

// Login User
authRouter.post(
  '/login',
  validateRequest(AuthValidationSchemas.AuthLoginSchema),
  AuthControllers.authLogin,
);

// Create User
authRouter.get('/logout', AuthControllers.logoutUser);
export const AuthRoutes = authRouter;
