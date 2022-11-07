import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import dashboardRouter from "./routes/dashboardRouter.js";
import mongoose from "mongoose";
import { verifyToken } from "./middlewares/verifyToken.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json({ extended: true, limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/", authRouter);
app.use("/dashboard", verifyToken, dashboardRouter);

//Global error handler middleware
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       msg: error.message,
//     },
//   });
// });

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Port listening on : " + PORT);
    })
  )
  .catch((err) => console.log(err));
