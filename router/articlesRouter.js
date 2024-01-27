import { Router } from "express";
import articlesController from "../controllers/articlesController.js";

const articlesRouter = new Router();

articlesRouter.get("/articles", articlesController.getAll);

articlesRouter.get("/articles/:id", articlesController.getOne);

export default articlesRouter;
