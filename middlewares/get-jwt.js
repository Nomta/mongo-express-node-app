const jwt = require('../service/jsonwebtoken');

module.exports = async function (req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return next();
        }

        const payload = jwt.verify(token);

        // req.userId = payload.userId;

        next();
    } catch (err) {
        next(err);
    }
};
