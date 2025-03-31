import UserModel from "../models/UserModel.js";
import argon2 from "argon2";

const createUser = async (req, res, userData) => {
  //   const { name, email, password } = userData;
  //hashing the user password
  //const hashedPassword = await argon2.hash(password, 10);

  //script for creatw new user
  try {
    //hold user requested input into a variable
    const newUser = new UserModel(req.body);
    //hashing the user password
    const hashedPassword = await argon2.hash(password, 10);
    //take email and compare with db field is it alreadt exist or not
    const { email } = newUser;
    const userExist = await UserModel.findOne(email);
    if (userExist) {
      return res
        .status(400)
        .json({ message: "user already exists with this email" });
    } else {
      //   const createdUser = new UserModel({
      //     name,
      //     email,
      //     hashedPassword,
      //     role: "customer",
      //   });

      //save user input into db
      const saveData = await newUser.save();
      // res.status(200).json(saveData);
      res.status(200).json({ message: "User created successfully" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export default createUser;
