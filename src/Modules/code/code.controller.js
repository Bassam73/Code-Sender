import codeModel from "../../../Database/Models/code.model.js";
import userModel from "../../../Database/Models/user.model.js";

import AppError from "../../../Utils/AppError.js";
import sendCode from "../../Emails/sendCodeTemplate.js";
import catchError from "../../Middlewares/catchError.js";
import cron from "node-cron";
export const addCode = catchError(async (req, res, next) => {
  let code = new codeModel(req.body);
  await code.save();
  res.json({ message: "Code has been added successfully ", code });
});

export const updateCode = catchError(async (req, res, next) => {
  let code = await codeModel.findByIdAndUpdate(req.params.id, req.body);
  if (!code) next(new AppError("Code Not found", 404));
  res.json({ message: "Code has been updated successfully" });
});

export const deleteCode = catchError(async (req, res, next) => {
  let code = await codeModel.findById(req.params.id);
  if (!code) next(new AppError("Code Not found", 404));
  await codeModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Code has been deleted successfully" });
});

cron.schedule("20 * 23 * * *", async () => {
  console.log("we r here");
  let users = await userModel.find();
  console.log("we r here");
  let emails = [];
  users.map((user) => {
    emails.push(user.email);
  });
  console.log("we r here");
  console.log(emails);
  let code = await codeModel.findOne({ codeType: "JavaScript" });
  console.log(code.code, code.description);
  sendCode(emails, code.code, code.description);
  console.log("we r here");
  await codeModel.findByIdAndDelete(code._id);
});
