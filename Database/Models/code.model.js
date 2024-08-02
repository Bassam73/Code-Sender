import mongoose from "mongoose";

let schema = new mongoose.Schema({
  codeType: {
    type: String,
    enum: ["node.js", "JavaScript"],
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

let codeModel = mongoose.model("code", schema);

export default codeModel;
