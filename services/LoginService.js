import argon2 from "argon2";
import UserModel from "../models/UserModel.js";
import generateToken from "../helpers/jwtHelper.js";

const LoginService = async (email, password) => {
  //script for generate jwt token for loggedin user
  try {
    //find user from db based on user inputed email
    const existingUser = await UserModel.findOne({ email });
    // Extract the saved hashed password from db and matching  with user input
    const savedpassword = existingUser.password;
    //compare the user is exists in DB or not
    if (existingUser) {
      const isPasswordValid = argon2.verify(savedpassword, password);
      //checking the user inputed password is valid or not
      if (isPasswordValid) {
        const token = generateToken(existingUser);
        return token;
      } else {
        throw new Error("Incorrect Password");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error("Invalid credentials");
  }
};

export default LoginService;
