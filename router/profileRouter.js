import { Router } from "express";
import profileController from "../controllers/profileController.js";

const profileRouter = new Router();

profileRouter.get("/profile", profileController.getAll);

profileRouter.get("/profile/:id", profileController.getOne);

profileRouter.put("/profile/:id", profileController.put);

export default profileRouter;
