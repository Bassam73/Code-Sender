import mongoose from "mongoose";
import bcrypt from "bcrypt";
let schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  codes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "code",
    },
  ],
});
schema.pre("save", function () {
  if (this.password) this.password = bcrypt.hashSync(this.password, 8);
});

let userModel = mongoose.model("user", schema);

export default userModel;
