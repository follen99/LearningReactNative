import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectToMongo() {
  try {
    await connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}
export default connectToMongo;