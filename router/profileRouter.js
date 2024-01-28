import { Router } from "express";
import { createController } from "../controllers/createController.js";

const profileRouter = new Router();

profileRouter.get("/profile", createController("profile").getAll);

profileRouter.get("/profile/:id", createController("profile").getOne);

profileRouter.put("/profile/:id", createController("profile").put);

export default profileRouter;
