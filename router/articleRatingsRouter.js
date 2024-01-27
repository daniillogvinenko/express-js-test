import { Router } from "express";
import articleRatingsController from "../controllers/articleRatingsController.js";

const articleRatingsRouter = new Router();

articleRatingsRouter.get("/article-ratings", articleRatingsController.getAll);

export default articleRatingsRouter;
