import UserModel from "../models/UserModel.js";
import argon2 from "argon2";

const createAdminAccount = async () => {
  try {
    //comapre the user inputed email with db email field is it already exists or not
    const existAdmin = await UserModel.findOne({ email: "admin@gmail.com" });
    if (existAdmin) {
      console.log("Admin already exists");
    } else {
      //setup admin credentials
      const newAdmin = new UserModel({
        email: "admin@gmail.com",
        name: "Admin",
        password: await argon2.hash("admin", 10),
        role: "admin",
      });
      //save the admin credentials to db
      await newAdmin.save();
      console.log("Admin Account Created Successfully");
    }
  } catch (error) {
    console.error(error.message);
  }
};

export default createAdminAccount;
