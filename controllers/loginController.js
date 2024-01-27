import { database } from "../db.js";

const loginController = {
    post: (req, res) => {
        const { username, password } = req.body;
        const { users = [] } = database;

        const userFromDb = users.find((user) => user.username === username && user.password === password);

        if (userFromDb) {
            return res.json(userFromDb);
        }

        return res.status(400).json({ message: "User not found" });
    },
};

export default loginController;
