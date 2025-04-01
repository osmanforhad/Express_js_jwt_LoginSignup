import UserModel from "../models/UserModel.js";
import argon2 from "argon2";

const SignupService = async (userData) => {
  try {
    //received user submitted inputs by userData param
    const { name, email, password } = userData;
    const hasedPassword = await argon2.hash(password, 12);
    const createdUser = new UserModel({
      name,
      email,
      password: hasedPassword,
      role: "customer",
    });
    //save user input into db
    const savedUser = await createdUser.save();
    return savedUser;
  } catch (error) {
    console.log(error);
  }
};

export default SignupService;
