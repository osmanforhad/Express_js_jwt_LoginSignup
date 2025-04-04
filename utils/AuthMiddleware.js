import jwt from "jsonwebtoken";
import secrateKey from "../config/jwtConfig.js";

const AuthMiddleware = async (req, res, next) => {
  //get authorization key
  const authHeader = req.header("Authorization");
  //check the authorization key is exsist or not
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: Mising token!" });
  } else {
    //verify the token with bearer
    const [bearer, token] = authHeader.split(" ");
    //check the bearer and token is exists or not
    if (bearer !== "Bearer" || !token) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    } else {
      //incase bearer and token is verify
      jwt.verify(token, secrateKey, (err, user) => {
        //check the error
        if (err) {
          return res.status(403).json({ message: "Forbiden: Invalid token" });
        } else {
          //if the user is veryfied then go to next
          req.user = user;
          next();
        }
      });
    }
  }
};

export default AuthMiddleware;
