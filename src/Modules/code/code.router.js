import express from "express";
import { addCode, deleteCode, updateCode } from "./code.controller.js";
import { addCodeVal, paramsIdVal } from "./code.validation.js";
import { validation } from "../../Middlewares/validation.js";
let codeRouter = express.Router();

codeRouter.route("/").post(validation(addCodeVal), addCode);

codeRouter
  .route("/:id")
  .patch(validation(paramsIdVal), updateCode)
  .delete(validation(paramsIdVal), deleteCode);
export default codeRouter;
