import jwt from 'jsonwebtoken';
import Users from '../models/user.model.js'

export const jwtController = {
    authenticate: async (req, res) => {
        try {
            const data = {
                email: req.headers.email,
                password: req.headers.password
            }
            const checkUser = await Users.findOne({ email: data.email });
            if (checkUser && checkUser.email === data.email && checkUser.password === data.password) {                
                const jwtPayload = {
                    email: req.headers.email
                }                
                const token = jwt.sign(jwtPayload, process.env.secret);
                res.status(200).json({ token, id: checkUser._id });
            } else {
                res.status(404).send({ message: 'the email-password combination does not exist'});
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