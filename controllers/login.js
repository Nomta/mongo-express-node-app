const User = require('../models/user');
const Session = require('../models/session');
const AuthError = require('../error/auth-error');
const { v4: uuid } = require('uuid');

exports.get = function (req, res, next) {
    res.render('index', { title: 'Login' });
};

exports.post = async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await checkAuth(email, password);
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
            const message = req.app.get('env') === 'development' ? err.message : 'Uncorrect data';
            return res.send(401, { message });
        }
        return next(err);
    }
};

async function checkAuth(email, password) {
    if (!email || !password) {
        throw new AuthError('Uncorrect data');
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthError('User not found');
        }

        const isValidPassword = await user.checkPassword(password);

        if (!isValidPassword) {
            throw new AuthError('Uncorrect password');
        }
        return user;
    } catch (err) {
        throw err;
    }
}
