import express from "express";
import SignupController from "../controllers/UserSignupController.js";
import createAdminAccount from "../AdminScripts/Admin.js";

const route = express.Router();

route.post("/register", SignupController);
route.post("/admin", createAdminAccount);

export default route;
