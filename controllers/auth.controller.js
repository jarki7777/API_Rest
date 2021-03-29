import jwt from 'jsonwebtoken';
import Users from '../models/user.model.js'

export const jwtController = {
    authenticate: async (req, res) => {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password
            }
            const checkUser = await Users.findOne({ email: data.email });
            if (checkUser && checkUser.email === data.email && checkUser.password === data.password) {
                const token = jwt.sign(data, process.env.secret);
                res.status(200).json({ token });
            } else {
                res.status(404).send({ message: 'the email password combination does not exist'});
            }
        } catch (e) {
            console.log(e)
            if (e.reason.message) {
                res.status(400).send({ message: e.reason.message });
            } else {
                res.status(500).send({ message: e.message });
            }
        }
    },
};