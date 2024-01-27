import { Router } from "express";
import notificationsController from "../controllers/notificationsController.js";

const notificationsRouter = new Router();

notificationsRouter.get("/notifications", notificationsController.getAll);

export default notificationsRouter;
