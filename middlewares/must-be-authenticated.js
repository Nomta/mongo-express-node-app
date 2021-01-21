module.exports = function (req, res, next) {
    if (!req.cookies.token) {
        return res.status(401).json({ message: 'User not found' });
    }

    next();
};
