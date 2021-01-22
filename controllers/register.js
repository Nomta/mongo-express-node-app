const User = require('../models/user');
const AuthError = require('../error/auth-error');
const { v4: uuid } = require('uuid');

exports.post = async function register(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await createUser(email, password);
        // const token = uuid();
        req.session.user = user._id;
        res.send(req.session);
    } catch (err) {
        if (err instanceof AuthError) {
            return res.send(401, { message: err.message });
        }
        return next(err);
    }
};

async function createUser(email, password) {
    if (!email || !password) {
        throw new AuthError('Uncorrect data');
    }

    try {
        let user = await User.findOne({ email });

        if (user) {
            throw new AuthError('User exists');
        }

        user = await User.create({ email });
        await user.setPassword(password);
        await user.save();

        return user;
    } catch (err) {
        throw err;
    }
}
