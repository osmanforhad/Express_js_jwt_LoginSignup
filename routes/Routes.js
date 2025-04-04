import express from "express";
import SignupController from "../controllers/UserSignupController.js";
import createAdminAccount from "../AdminScripts/Admin.js";
import LoginController from "../controllers/LoginController.js";
import getUserController from "../controllers/getUserController.js";
import AuthMiddleware from "../utils/AuthMiddleware.js";

const route = express.Router();

route.post("/register", SignupController);
route.post("/admin", createAdminAccount);
route.post("/login", LoginController);
route.get("/users", AuthMiddleware, getUserController);

export default route;
