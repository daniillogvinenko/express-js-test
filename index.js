import express from "express";
import userRouter from "./router/userRouter.js";
import articlesRouter from "./router/articlesRouter.js";
import commentsRouter from "./router/commentsRouter.js";
import profileRouter from "./router/profileRouter.js";
import loginRouter from "./router/loginRouter.js";
import notificationsRouter from "./router/notificationsRouter.js";
import articleRatingsRouter from "./router/articleRatingsRouter.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// чтобы пофиксить ошибку CORSа
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    // Pass to next layer of middleware
    next();
});

// подключаем все роутеры
app.use("/", userRouter);
app.use("/", articlesRouter);
app.use("/", commentsRouter);
app.use("/", profileRouter);
app.use("/", loginRouter);
app.use("/", notificationsRouter);
app.use("/", articleRatingsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
