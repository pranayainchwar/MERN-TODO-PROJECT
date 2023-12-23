import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Routes from "./routes/routes.js";

const app = express();
const PORT = 8000;
app.use(cors());
// app.use(express.json({ extended: true })); // or we use bodyParser insted of express 
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
