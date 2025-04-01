import UserModel from "../models/UserModel.js";
import SignUpService from "../services/SignUpService.js";

const SignupController = async (req, res) => {
  try {
    const userData = req.body;
    //comapre user inputed email with db is it already exists or not
    const { email } = userData;
    const userExist = await UserModel.exists({ email: email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "User already exists with this email id" });
    }
    //callinf signup servics for save data and pass user submited inputs as a param
    SignUpService(userData);
    return res
      .status(201)
      .json({ message: "User created successfully", User: userData });
  } catch (error) {
    res.status(400).json({ errorMessage: error.message });
  }
};

export default SignupController;
