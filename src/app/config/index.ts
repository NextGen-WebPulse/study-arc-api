import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  PORT: process.env.PORT,
  MONGOOSE_URL: process.env.MONGOOSE_URL,
  NODE_ENV: process.env.NODE_ENV,
};