import LoginService from "../services/LoginService.js";

const LoginController = async (req, res) => {
  try {
    //script for get the email and pass from user input
    const { email, password } = req.body;
    //calling the LoginService method and pass user email and pass as a param to generate token for loggedin user
    const loggedInUSerToken = await LoginService(email, password);
    res.json({ Token: loggedInUSerToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

export default LoginController;
