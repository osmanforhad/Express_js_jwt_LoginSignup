import express from "express";
import SignupController from "../controllers/UserSignupController.js";
import createAdminAccount from "../AdminScripts/Admin.js";
import LoginController from "../controllers/LoginController.js";

const route = express.Router();

route.post("/register", SignupController);
route.post("/admin", createAdminAccount);
route.post("/login", LoginController);

export default route;
