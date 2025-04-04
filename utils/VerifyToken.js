import jwt from "jsonwebtoken";
import secrateKey from "../config/jwtConfig.js";

const VerifyToken = async (token) => {
  return jwt.verify(token, secrateKey);
};

export default VerifyToken;
