// index.js
import express from "express";
import Connection from "./database/db.js";

const app = express();
const PORT = 8000;

(async () => {
  try {
    await Connection();
    app.listen(PORT, () => {
      console.log(`Server Started on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();
