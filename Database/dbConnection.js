import mongoose from "mongoose";

export default function dbConnection() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/CodeSender")
    .then(() => {
      console.log("Database is online");
    })
    .catch((err) => {
      console.log(err);
    });
}
