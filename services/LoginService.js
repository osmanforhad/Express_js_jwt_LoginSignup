import argon2 from "argon2";
import UserModel from "../models/UserModel.js";
import generateToken from "../helpers/jwtHelper.js";

const LoginService = async (email, password) => {
  //script for generate jwt token for loggedin user
  try {
    //find user from db based on email
    const existingUser = await UserModel.findOne({ email });
    //compare the user is exists in DB or not
    if (existingUser) {
      const isPasswordValid = await argon2.compare(
        password,
        existingUser.password
      );
      if (isPasswordValid) {
        //calling GenerateToken method and logic for generate jwt token
        const token = generateToken(existingUser);
        return token;
      } else {
        throw new error("Invalid Password");
      }
    } else {
      throw new error("User not found");
    }
  } catch (error) {
    throw new error("Invalid Credentials");
  }
};

export default LoginService;
