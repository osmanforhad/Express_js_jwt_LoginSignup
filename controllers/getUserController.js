import getUserService from "../services/getUserService.js";

const getUserController = async (req, res) => {
  try {
    //calling the get user service method
    const users = await getUserService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
export default getUserController;
