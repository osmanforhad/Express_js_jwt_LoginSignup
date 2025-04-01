import UserModel from "../models/UserModel.js";

const SignupService = async (userData) => {
  try {
    //received user submitted inputs by userData param
    const { name, email, password } = userData;
    const createdUser = new UserModel({
      name,
      email,
      password,
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
