import { Router } from "express";
import { createController } from "../controllers/createController.js";

const articlesRouter = new Router();

articlesRouter.get("/articles", createController("articles").getAll);

articlesRouter.get("/articles/:id", createController("articles").getOne);

export default articlesRouter;
