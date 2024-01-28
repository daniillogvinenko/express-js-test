import { database } from "../db.js";

export const createController = (entityName) => {
    let items = database[entityName];

    const controller = {
        getAll: (req, res) => {
            let resItems = items;
            if (req.query["_limit"]) {
                const limit = +req.query["_limit"];
                const page = +req.query["_page"] || 1;
                resItems = items.slice((page - 1) * limit, (page - 1) * limit + limit);
            }

            // expand работает неправильно, так как всегда добавляет пользователя, но в данном приложении в другой ситуации expand не используется
            if (req.query["_expand"]) {
                resItems = resItems.map((item) => {
                    const { users } = database;
                    const index = users.findIndex((user) => +user.id === +item.userId);

                    return { ...item, user: users[index] };
                });
            }

            if (req.query.q) {
                resItems = resItems.filter((item) => {
                    let valueStartsWithQuery = false;

                    // если хоть одно из полей объекта начинается со строки запроса, то этот объект подходит под поисковой запрос
                    Object.values(item).forEach((value) => {
                        if (String(value).toLowerCase().startsWith(String(req.query.q).toLowerCase()))
                            valueStartsWithQuery = true;
                    });
                    return valueStartsWithQuery;
                });
            }

            if (req.query.userId) {
                resItems = resItems.filter((item) => +item.userId === +req.query.userId);
            }

            if (req.query.articleId) {
                resItems = resItems.filter((item) => +item.articleId === +req.query.articleId);
            }

            res.status(200).json(resItems);
        },
        getOne: (req, res) => {
            const index = items.findIndex((item) => +item.id === +req.params.id);
            let resItem = items[index];
            if (index > -1) {
                if (req.query["_expand"]) {
                    const { users } = database;
                    const userIndex = users.findIndex((user) => +user.id === +resItem.userId);
                    resItem = { ...resItem, user: users[userIndex] };
                }

                res.status(200).json(resItem);
            } else {
                res.status(500).json({ message: `${entityName.slice(0, -1)} not found` });
            }
        },
        put: (req, res) => {
            const index = items.findIndex((item) => +item.id === +req.params.id);

            if (index > -1) {
                items[index] = { ...items[index], ...req.body };
            } else {
                res.status(500).json({ message: `${entityName.slice(0, -1)} not found` });
            }

            res.status(200).json(items[index]);
        },
        delete: (req, res) => {
            const index = items.findIndex((item) => +item.id === +req.params.id);

            if (index > -1) {
                items.splice(index, 1);
            } else {
                res.status(500).json({ message: `${entityName.slice(0, -1)} not found ${index}` });
            }

            res.status(200).json(items);
        },
        post: (req, res) => {
            if (!items.find((item) => +item.id === +req.body.id)) {
                const newItem = {
                    ...req.body,
                };
                items.push(newItem);
                res.status(200).json(newItem);
            } else {
                res.status(500).json({ message: `${entityName.slice(0, -1)} not found` });
            }
        },
    };

    return controller;
};
