
import mongoose from "mongoose";
// const mongoose = require("mongoose");
const Connection = async()=>{
// MongoDB connection string
const MONGODB_URI ="mongodb+srv://TodoPranay:PranayTodo@cluster0.jurndme.mongodb.net/?retryWrites=true&w=majority";

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
