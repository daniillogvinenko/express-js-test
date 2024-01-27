import { Router } from "express";
import commentsController from "../controllers/commentsController.js";

const commentsRouter = new Router();

commentsRouter.get("/comments", commentsController.getAll);

export default commentsRouter;
