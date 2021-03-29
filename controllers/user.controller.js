import Users from '../models/user.model.js';
import { checkUrl } from '../util/checkUrl.js';

export const userController = {
    createNewUser: async (req, res) => {
        try {
            const newUser = {
                email: req.headers.email,
                userName: req.headers.username,
                password: req.headers.password,
                age: req.headers.age,
                role: req.headers.role
            }
            await Users.create(newUser);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    dashboard: async (req, res) => {
        try {
            const id = req.query.id;
            const user = await Users.findById({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.query.id;
            const user = await Users.findByIdAndDelete({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}