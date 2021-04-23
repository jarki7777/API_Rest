import Users from '../models/user.model.js';
import { checkUrl } from '../util/checkUrl.js';

export const userController = {
    create: async (req, res) => {

        const born = req.body.born;

        const calculateAge = (birthday) => {
            const diffTimestamp = Date.now() - birthday.getTime();
            const today = new Date(diffTimestamp);

            return Math.abs(today.getUTCFullYear() - 1970);
        }
        console.log(born)
        const age = calculateAge(new Date(born));

        try {
            const newUser = {
                email: req.body.email,
                userName: req.body.userName,
                password: req.body.password,
                born: req.body.born,
                age: age
            }
            const response = await Users.create(newUser);

            console.log(response)

            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    dashboard: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await Users.findById({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await Users.findByIdAndDelete({ _id: id });
            checkUrl(id, user, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    }
}