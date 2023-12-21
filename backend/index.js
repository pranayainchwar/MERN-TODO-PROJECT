import express from "express";

import cors from 'cors';
import Routes from "./routes/routes.js";
import bodyParser from "body-parser";
import Connection from "./database/db.js";

const app = express();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

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
