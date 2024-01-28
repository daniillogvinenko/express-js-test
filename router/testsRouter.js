import { Router } from "express";
import { createController } from "../controllers/createController.js";

const testsRouter = new Router();

testsRouter.get("/tests", createController("tests").getAll);
testsRouter.get("/tests/:id", createController("tests").getOne);
testsRouter.put("/tests/:id", createController("tests").put);
testsRouter.delete("/tests/:id", createController("tests").delete);
testsRouter.post("/tests/:id", createController("tests").post);

export default testsRouter;
