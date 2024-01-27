import express from "express";
import { database } from "./db.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// чтобы пофиксить ошибку CORSа
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");

    // Pass to next layer of middleware
    next();
});

// ---USER ENDPOINT---------------------------------------
app.get("/users", (req, res) => {
    const users = database.users;
    res.send(users);
});

app.get("/users/:uid", (req, res) => {
    const users = database.users;
    const index = users.findIndex((user) => user.id === +req.params.uid);

    if (index === -1) {
        res.sendStatus(400);
    }

    res.send(users[index]);
});

app.post("/users", (req, res) => {
    const users = database.users;
    if (!users.find((user) => +user.id === +req.body.id)) {
        const newUser = {
            ...req.body,
        };
        users.push(newUser);
        res.send(newUser);
    } else {
        res.sendStatus(400);
    }
});

app.delete("/users/:uid", (req, res) => {
    const users = database.users;
    const index = users.findIndex((user) => user.id === req.params.uid);

    if (index > -1) {
        users.splice(index, 1);
    }

    res.send(users);
});

// ------LOGIN ENDPOINT------------------------------

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const { users = [] } = database;

    const userFromDb = users.find((user) => user.username === username && user.password === password);

    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(400).json({ message: "User not found" });
});

// --------------------------------------------------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
