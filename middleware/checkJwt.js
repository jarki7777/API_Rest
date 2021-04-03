import jwt from 'jsonwebtoken'

export const checkJwt = (req, res, next) => {
    try {
    jwt.verify(req.headers.authentication, process.env.SECRET);
    next();
    } catch(e) {
        res.sendStatus(401)
    }
};