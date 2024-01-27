import { database } from "../db.js";

const userController = {
    getAll: (req, res) => {
        const users = database.users;
        res.send(users);
    },
    getOne: (req, res) => {
        const users = database.users;
        const index = users.findIndex((user) => +user.id === +req.params.uid);

        if (index === -1) {
            res.sendStatus(400);
        }

        res.send(users[index]);
    },
    post: (req, res) => {
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
    },
    delete: (req, res) => {
        const users = database.users;
        const index = users.findIndex((user) => +user.id === +req.params.uid);

        if (index > -1) {
            users.splice(index, 1);
        }

        res.send(users);
    },
};

export default userController;
