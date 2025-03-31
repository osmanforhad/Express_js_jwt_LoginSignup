import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Database Connection Successfull");
    });
  } catch (error) {
    throw error;
  }
};

export default DbConnection;
