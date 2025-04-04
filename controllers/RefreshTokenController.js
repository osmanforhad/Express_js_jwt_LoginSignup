import RefreshTokenHelper from "../helpers/RefreshTokenHelper.js";
const RefreshTokenController = async (req, res) => {
  try {
    //script for get the email and pass from user input
    const { token } = req.body;
    //calling the LoginService method and pass user email and pass as a param to generate token for loggedin user
    const newToken = await RefreshTokenHelper(token);
    res.json({ newToken: newToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default RefreshTokenController;
