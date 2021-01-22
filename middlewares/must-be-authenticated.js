module.exports = function (req, res, next) {
    if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
    }

    next();
};

// const token = req.headers.authorization?.split(" ")[1];
// if (!token) {
//     res.send(401)
// }
