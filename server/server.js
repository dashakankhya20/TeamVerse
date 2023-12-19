import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import teamRoutes from "./routes/team.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import data from "../data.json" assert { type: "json"};
// import User from "./models/User.js";
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);

//database connectivity
const PORT = 4000 || process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
      //For inserting dummy data (only once)
      // data.forEach( async (item) => {
      //   try {
      //     const user = new User(item);
      //     //console.log(user);
      //     await user.save();
      //     console.log('Data saved');
      //   } catch (error) {
      //     console.error(`Error saving: ${error}`);
      //   }
      // })
    })
  })
  .catch((error) => {
    console.log(`Error occurred: ${error}`);
  });
