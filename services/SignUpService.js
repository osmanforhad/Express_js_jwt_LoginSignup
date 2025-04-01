import UserModel from "../models/UserModel.js";
import argon2 from "argon2";

const SignupService = async (res, input) => {
  console.log("this is paramiter", input);
  const { name, email, password } = input;
  //hashing the user password
  const hashedPassword = await argon2.hash(password, 10);
  //script for creatw new user
  try {
    //take email and compare with db field is it alreadt exist or not
    const { email } = newUser;
    const userExist = await UserModel.findOne(email);
    if (userExist) {
      return res
        .status(400)
        .json({ message: "user already exists with this email" });
    } else {
      const createdUser = new UserModel({
        name,
        email,
        hashedPassword,
        role: "customer",
      });
      //save user input into db
      const savedUser = await createdUser.save();
      return savedUser;
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export default SignupService;
