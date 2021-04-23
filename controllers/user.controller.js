import Users from '../models/user.model.js';
import { checkUrl } from '../util/checkUrl.js';

export const userController = {
    create: async (req, res) => {

        const born = req.headers.born;

        const calculateAge = (birthday) => {
            const diffTimestamp = Date.now() - birthday.getTime();
            const today = new Date(diffTimestamp);

            return Math.abs(today.getUTCFullYear() - 1970);
        }

        const age = calculateAge(new Date(born));

        try {
            const newUser = {
                email: req.headers.email,
                userName: req.headers.username,
                password: req.headers.password,
                born: req.headers.born,
                age: age
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
            const id = req.params.id;
            const user = await Users.findById({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await Users.findByIdAndDelete({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
}