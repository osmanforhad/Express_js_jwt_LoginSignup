import jwt from "jsonwebtoken";
import secrateKey from "../config/jwtConfig.js";

//method for generate token which will receve user object as param
const generateToken = (user) => {
  //create object based on user input as payload
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role,
  };

  return jwt.sign(payload, secrateKey, { expiresIn: "1h" });
};

export default generateToken;
