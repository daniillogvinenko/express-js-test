import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const users = [
    {
        id: 1,
        username: "admin",
    },
    {
        id: 2,
        username: "player",
    },
];

app.use(express.json());

// ---ENDPOINTS---------------------------------------
app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:uid", (req, res) => {
    const index = users.findIndex((user) => user.id === +req.params.uid);

    if (index === -1) {
        res.sendStatus(400);
    }

    res.send(users[index]);
});

app.post("/users", (req, res) => {
    if (!users.find((user) => user.id === req.body.id)) {
        const newUser = {
            id: req.body.id,
            username: req.body.username,
        };
        users.push(newUser);
        res.send(newUser);
    } else {
        res.sendStatus(400);
    }
});

app.delete("/users/:uid", (req, res) => {
    const index = users.findIndex((user) => user.id === +req.params.uid);

    if (index > -1) {
        users.splice(index, 1);
    }

    res.send(users);
});

// --------------------------------------------------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

export default app;
