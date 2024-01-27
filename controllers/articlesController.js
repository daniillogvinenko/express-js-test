import { database } from "../db.js";

const articlesController = {
    getAll: (req, res) => {
        const articles = database.articles;

        // если есть _expand=user, то мы преобразовываем массив, добавляя к каждой статье соотв. пользователя
        if (req.query["_expand"]) {
            const expandedArticles = articles.map((article) => {
                const { users } = database;
                const index = users.findIndex((user) => +user.id === +article.userId);

                return { ...article, user: users[index] };
            });
            res.send(expandedArticles);
        }

        res.send(articles);
    },
    getOne: (req, res) => {
        const articles = database.articles;
        const index = articles.findIndex((article) => +article.id === +req.params.id);

        if (index > -1) {
            res.send(articles.splice(index, 1));
        }

        res.send(articles);
    },
};

export default articlesController;
