import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  PORT: process.env.PORT,
  MONGOOSE_URL: process.env.MONGOOSE_URL,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT_SOLT_ROUND: process.env.BCRYPT_SOLT_ROUND,
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
};