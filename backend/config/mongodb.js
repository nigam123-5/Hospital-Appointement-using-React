import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// MongoDB connection function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB; 



