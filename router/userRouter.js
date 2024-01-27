import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = new Router();

userRouter.get("/users", userController.getAll);

userRouter.get("/users/:uid", userController.getOne);

userRouter.post("/users", userController.post);

userRouter.delete("/users/:uid", userController.delete);

export default userRouter;
