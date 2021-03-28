import Users from '../models/user.model.js';
import checkUrl from './checkUrl.js';

export const userController = {
    createNewUser: async (req, res) => {
        try {
            const newUser = req.body;
            await Users.create(newUser);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: 'all fields are required' })
        }
    },
    dashboard: async (req, res) => {
        try {
            const id = req.query.id;
            const user = await Users.findById({ _id: id });
            res.status(200).send(user);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: 'id is required' })
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.query.id;
            if (!id) {
                res.status(400).send({ message: 'id param is required' });
            }
            await Users.findByIdAndDelete({ _id: id });
            res.sendStatus(200)
        } catch (e) {
            console.log(e);
        }
    }
}