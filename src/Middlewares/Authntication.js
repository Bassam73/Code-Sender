import userModel from "../../Database/Models/user.model.js";
import AppError from "../../Utils/AppError.js";
import catchError from "./catchError.js";
import jwt from "jsonwebtoken";
const authntication = catchError(async (req, res, next) => {
  let token = req.headers.token;

  token = jwt.decode(token, "CodeSenderSecreyKey");

  let user = await userModel.findOne({ email: token.user.email });
  if (!user) next(new AppError("Invalid Token", 404));
  req.user = user;
  next();
});

export default authntication;
