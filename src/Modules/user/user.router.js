import express from "express";
import { signIn, signUp, verified, verifyEmail } from "./user.controller.js";
import { signInVal, signUpVal } from "./user.validation.js";
import { validation } from "../../Middlewares/validation.js";
import authntication from "../../Middlewares/Authntication.js";
let userRouter = express.Router();

userRouter.post("/signUp", validation(signUpVal), signUp);
userRouter.post("/signIn", validation(signInVal), signIn);
userRouter.post("/verify", authntication, verifyEmail);
userRouter.get("/verifying/:email", verified);
export default userRouter;
