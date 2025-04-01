import mongoose from "mongoose";
import argon2 from "argon2";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "customer"],
    default: "customer",
  },
});

//script for hashing user password
UserSchema.pre("save", async function () {
  this.password = await argon2.hash(this.password, 12);
});

export default mongoose.model("Users", UserSchema);
