import { Router } from "express";
import loginController from "../controllers/loginController.js";

const loginRouter = new Router();

loginRouter.post("/login", loginController.post);

export default loginRouter;
