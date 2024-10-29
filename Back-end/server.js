import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/FoodRoute.js";

//app config
const app = express();
const port = 3000;

//middleware
app.use(express.json()); //when get an request from frontend to back this will parse it
app.use(cors()); //we can  access the backend using any front end

//DB connection
connectDB();

//API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

//this is a http method using this we can request data from the server
//when we hit this end "/" point we will get this message
//When we hit a url it will works as a get method
app.get("/", (req, res) => {
  res.send("API working");
});

//to run express
app.listen(port, () => {
  console.log(`Sever started on http://localhost:${port}`);
});
