import UserModel from "../models/UserModel.js";

const SignupController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExist = await UserModel.exists({ email: email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "user already exists with this email" });
    }
    const createdUser = new UserModel({
      name,
      email,
      password,
      role: "customer",
    });
    //save user input into db
    const savedUser = await createdUser.save();
    console.log(savedUser);
    return res.status(201).json({ message: "success", savedUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ errorMessage: error.message });
  }
};

export default SignupController;
