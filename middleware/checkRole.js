export const checkRole = (req, res, next) => {
    if (req.headers.role !== 'admin') {
        res.status(403).send('User does not have the admin privileges');
    } else {
        next()
    }
}