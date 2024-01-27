import { database } from "../db.js";

const notificationsController = {
    getAll: (req, res) => {
        const { notifications } = database;
        res.send(notifications);
    },
};

export default notificationsController;
