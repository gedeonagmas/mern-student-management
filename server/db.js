import mongoose from "mongoose"
import "dotenv/config";
const url = process.env.URL;
const params = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, params);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

export default connectDB;
