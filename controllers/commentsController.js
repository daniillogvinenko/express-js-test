import { database } from "../db.js";

const commentsController = {
    getAll: (req, res) => {
        const comments = database.comments;
        res.send(comments);
    },
};

export default commentsController;
