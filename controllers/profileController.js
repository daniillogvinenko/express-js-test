import { database } from "../db.js";

const profileController = {
    getAll: (req, res) => {
        const profiles = database.profile;
        res.send(profiles);
    },
    getOne: (req, res) => {
        const profiles = database.profile;
        const index = profiles.findIndex((profile) => +profile.id === +req.params.id);

        if (index > -1) {
            res.send(profiles.splice(index, 1));
        }

        res.send(profiles);
    },
    put: (req, res) => {
        const profiles = database.profile;
        const index = profiles.findIndex((profile) => +profile.id === +req.params.id);

        if (index > -1) {
            profiles[index] = { ...req.body };
        }

        res.send(profiles[index]);
    },
};

export default profileController;
