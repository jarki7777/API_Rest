import jwt from 'jsonwebtoken';

export const jwtController = {
    singIn: (req, res) => {
        try {
            const data = {
                email: req.body.email,
                userName: req.body.userName
            }
            const token = jwt.sign(data, process.env.secret);
            res.json({ token })
        } catch (e) {
            console.log(e);
        }
    },
};