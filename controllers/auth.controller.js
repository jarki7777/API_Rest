import jwt from 'jsonwebtoken';
import Users from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const jwtController = {
    authenticate: async (req, res) => {
        
        const { email, password } = req.body

        const checkUser = await Users.findOne({ email: email });
        console.log(checkUser);
        if(!checkUser){
            res.status(404).send({ message: 'The email is incorrect'});
        }
        if (checkUser.email === email && bcrypt.compareSync(password, checkUser.password)) {                
            const jwtPayload = {
                id: checkUser._id
            }                
            const token = jwt.sign(jwtPayload, process.env.SECRET);
            res.status(200).json({ token, id: checkUser._id, role: checkUser.role });
        } else {
            res.status(404).send({ message: 'The password is incorrect'});
        }
    },
};