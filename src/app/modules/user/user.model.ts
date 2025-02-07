import { model, Schema } from 'mongoose';
import { IUser, IUserAddress } from './user.interface';

const userAddressSubSchema = new Schema<IUserAddress>({
  country: {
    type: String,
    default: null,
  },
  state: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    default: null,
  },
  zip_code: {
    type: String,
    default: null,
  },
});

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: true,
    },
    role: {
      type: String,
      enum: ['Student', 'Trainer', 'SuperAdmin'],
      default: 'Student',
    },
    image: {
      type: String,
    },
    dateOfBirth: {
      type: String,
    },
    address: userAddressSubSchema,
    accountStatus: {
      type: String,
      enum: ['active', 'block'],
      default: 'active',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<IUser>('User', userSchema);
