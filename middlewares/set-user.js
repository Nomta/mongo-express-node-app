const User = require('../models/user');

module.exports = async function (req, res, next) {
    req.user = res.locals.user = null;

    if (!req.session.user) {
        return next();
    }

    try {
        const user = await User.findById(req.session.user, {
            salt: false,
            passwordHash: false,
            __v: false
        });

        req.user = res.locals.user = user;

        next();
    } catch (err) {
        next(err);
    }
};
