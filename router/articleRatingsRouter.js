import { Router } from "express";
import { createController } from "../controllers/createController.js";

const articleRatingsRouter = new Router();

articleRatingsRouter.get("/article-ratings", createController("article-ratings").getAll);

export default articleRatingsRouter;
