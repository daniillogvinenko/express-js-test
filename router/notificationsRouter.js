import { Router } from "express";
import { createController } from "../controllers/createController.js";

const notificationsRouter = new Router();

notificationsRouter.get("/notifications", createController("notifications").getAll);

export default notificationsRouter;
