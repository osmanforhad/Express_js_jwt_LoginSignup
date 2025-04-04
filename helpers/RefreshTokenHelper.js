import UserModel from "../models/UserModel.js";
import VerifyToken from "../utils/VerifyToken.js";
import generateToken from "./jwtHelper.js";

const RefreshTokenHelper = async (oldToken) => {
  try {
    //calling the token verification token
    const decodedToken = VerifyToken(oldToken);
    //compare the verifed token with db
    const user = UserModel.findById(decodedToken._id);
    if (!user) {
      throw new Error("User not found");
    } else {
      const newToken = generateToken(user);
      return newToken;
    }
  } catch (error) {
    throw new Error("Invalid Token");
  }
};

export default RefreshTokenHelper;
