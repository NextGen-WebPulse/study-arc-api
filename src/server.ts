import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
// Connection Related Function Here
async function main() {
  try {
    // DB Connection
    await mongoose.connect(config.MONGOOSE_URL as string);
    // Server Connection
     app.listen(config.PORT, () => {
      console.log(`✅ StudyArc API Connected ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();


