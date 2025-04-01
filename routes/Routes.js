import express from "express";
import SignupController from "../controllers/UserSignupController.js";

const route = express.Router();

route.post("/register", SignupController);

export default route;
