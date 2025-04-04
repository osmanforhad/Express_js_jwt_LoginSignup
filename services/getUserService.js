import UserModel from "../models/UserModel.js";

const getUserService = async () => {
  try {
    //query for get all the users from db
    const users = await UserModel.find({});
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("User not found");
  }
};

export default getUserService;
