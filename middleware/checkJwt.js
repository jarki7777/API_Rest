export const checkJwt = (req, res, next) => {
    try {
    jwt.verify(req.headers.token, process.env.secret);
    next();
    } catch(e) {
        res.sendStatus(401)
    }
};