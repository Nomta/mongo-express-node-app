const User = require('../models/user');
const Session = require('../models/session');
const AuthError = require('../error/auth-error');
const { v4: uuid } = require('uuid');

exports.post = async function register(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await createUser(email, password);
        const token = uuid();

        // await Session.create({
        //   token,
        //   user: user.id,
        //   visited: new Date()
        // });

        //   req.session = req.session || {}
        //   req.session.user = user.id;

        const options = {
            maxAge: 900000,
            sameSite: 'Strict',
            // signed: true,
            httpOnly: true
        };

        res.cookie('token', token, options);
        res.json({ user });
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
