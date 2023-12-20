import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const Connection = async()=>{
// MongoDB connection string
const MONGODB_URI =`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.jurndme.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB
await mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB ie, Database Connected Successfully");
    // Your code here, like defining schemas, models, etc.
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB ie, Database:", error);
  });
}
export default Connection;
