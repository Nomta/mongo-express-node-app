// const passport = require('passport');
const User = require('../models/user');
const AuthError = require('../error/auth-error');

const { v4: uuid } = require('uuid');
// const passport = require('../service/passport');

exports.get = function (req, res, next) {
    res.render('index', { title: 'Login' });
};

// exports.post = passport.authenticate('login', {
//   successRedirect: '/home',
//   failureRedirect: '/',
//   failureFlash : true
// // });

// exports.post = async function login(req, res, next) {
//     await passport.authenticate('local', async (err, user, info) => {
//         if (err) throw err;

//         if (!user) {
//             return res.send(400);
//         }

//         const token = uuid();

//         res.send({ token });
//     });
// };

exports.post = async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await getUser(email, password);
        // const token = uuid();
        req.session.user = user._id;
        res.send(req.session);
    } catch (err) {
        if (err instanceof AuthError) {
            const message = req.app.get('env') === 'development' ? err.message : 'Uncorrect data';
            return res.send(401, { message });
        }
        return next(err);
    }
};

async function getUser(email, password) {
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
