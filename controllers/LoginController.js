import LoginService from "../services/LoginService.js";

const LoginController = async (req, res) => {
  try {
    //script for get the email and pass from user input
    const { email, password } = req.body;
    //calling the LoginService method and pass user email and pass as a param to generate token for loggedin user
    const token = await LoginService(email, password);
    res.json({ message: "Loggedin Successfully", token: token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export default LoginController;
