import { Router } from "express";
import { createController } from "../controllers/createController.js";

const commentsRouter = new Router();

commentsRouter.get("/comments", createController("comments").getAll);

export default commentsRouter;
