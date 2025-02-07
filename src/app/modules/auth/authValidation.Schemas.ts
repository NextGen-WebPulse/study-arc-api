import { z } from 'zod';

const AuthLoginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email Field is Required!' }),
    password: z.string({ required_error: 'Password Field is Required!' }),
  }),
});

export const AuthValidationSchemas = {
  AuthLoginSchema,
};
