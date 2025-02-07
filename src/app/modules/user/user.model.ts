/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { IUser, IUserAddress, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
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

const userSchema = new Schema<IUser, UserModel>(
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

userSchema.pre('save', async function (next) {
  const userInfo = this;
  userInfo.password = await bcrypt.hash(
    userInfo.password,
    Number(config.BCRYPT_SOLT_ROUND),
  );
  next();
});

// Static for User Password Check
userSchema.statics.isCheckPassword = async function (
  myPlaintextPassword: string,
  hashPass: string,
) {
  return await bcrypt.compare(myPlaintextPassword, hashPass);
};

export const User = model<IUser, UserModel>('User', userSchema);
