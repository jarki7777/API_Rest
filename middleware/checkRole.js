import Users from '../models/user.model.js';
import jwt from 'jsonwebtoken';


export const checkRole = async (req, res, next) => {
    try {
        const id = jwt.decode(req.headers.auth);
        const user = await Users.findById({ _id: id.id });
        if (user.role !== 'admin') {
        res.status(401).send('User does not have the admin privileges');
    } else {
        next()
    }    
    } catch (e) {
        console.log(e)
    }   
}