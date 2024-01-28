import { Router } from "express";
import { createController } from "../controllers/createController.js";

const userRouter = new Router();

userRouter.get("/users", createController("users").getAll);

userRouter.get("/users/:id", createController("users").getOne);

userRouter.post("/users", createController("users").post);

userRouter.delete("/users/:id", createController("users").delete);

export default userRouter;
