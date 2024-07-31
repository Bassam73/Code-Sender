import mongoose from "mongoose";

let schema = new mongoose.Schema({
  codeType: {
    type: String,
    enum: ["node.js", "JavaScript"],
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
});

let codeModel = mongoose.model("code", schema);

export default codeModel;
