import { database } from "../db.js";

const articleRatingsController = {
    getAll: (req, res) => {
        const articleRatings = database["article-ratings"];
        res.send(articleRatings);
    },
};

export default articleRatingsController;
