import userModel from "../../../Database/Models/user.model.js";
import sendMail from "../../Emails/verifyEmail.js";
import catchError from "../../Middlewares/catchError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signUp = catchError(async (req, res, next) => {
  let user = new userModel(req.body);
  await user.save();
  let token = jwt.sign(user, "CodeSenderSecreyKey");
  res.json({ message: "Register success ", user, token });
});

export const signIn = catchError(async (req, res, next) => {
  let user = await userModel.findOne({ email: req.body.email });
  console.log(user);
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      let token = jwt.sign({ user }, "CodeSenderSecreyKey");
      res.json({ Message: "Successfully Login ", token });
    }
  }
});

export const verifyEmail = catchError(async (req, res, next) => {
  let { user } = req;
  let token = req.headers.token;
  console.log(user);
  if (user.verified == false) {
    sendMail(user.email);
    res.json({ message: "Email Sent" });
  } else {
    res.json({ message: "Verified" });
  }
});

export const verified = catchError(async (req, res, next) => {
  let email = req.params.email;
  console.log(email);
  await userModel.findOneAndUpdate({ email }, { verified: true });

  res.json({ Message: "You have beed verified" });
});
