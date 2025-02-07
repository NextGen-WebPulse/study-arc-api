import { z } from 'zod';

// // Address schema
// const UserAddressSchema = z.object({
//   country: z.string().min(1, 'Country is required'),
//   state: z.string().min(1, 'State is required'),
//   city: z.string().min(1, 'City is required'),
//   zip_code: z.string().min(1, 'Zip code is required'),
// });

// User schema
const UserCreateValidationSchema = z.object({
  name: z.string().min(3, 'Name should be at least 3 characters long'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Phone number should be at least 10 characters'),
  userName: z.string().min(3, 'Username should be at least 3 characters long'),
  gender: z.enum(['Male', 'Female'], {
    required_error: "Gender must be 'Male' or 'Female'",
  }),
  password: z.string().min(6, 'Password should be at least 6 characters long'),
});

export const UserValidationSchemas = {
  UserCreateValidationSchema,
};
