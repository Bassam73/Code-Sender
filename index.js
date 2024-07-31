process.on("uncaughtException", (err) => {
  console.log("Error :", err);
});
import express from "express";
import { globalErrorHandler } from "./src/Middlewares/globalErrorHandler.js";
import AppError from "./Utils/AppError.js";
import dbConnection from "./Database/dbConnection.js";
import userRouter from "./src/Modules/user/user.router.js";

let app = express();
const port = 3500;

dbConnection();
app.use(express.json());
app.use("/user", userRouter);
app.use("*", (req, res, next) => {
  next(new AppError(`Invalid route ${req.originalUrl}`, 404));
});
app.use(globalErrorHandler);
process.on("unhandledRejection", (err) => {
  console.log("Error : ", err);
});

app.listen(port, () => {
  console.log("Server is Running");
});
