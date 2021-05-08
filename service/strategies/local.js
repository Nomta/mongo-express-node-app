const LocalStrategy = require('passport-local').Strategy;
const AuthError = require('../../error/auth-error');
const User = require('../../models/User');

module.exports = new LocalStrategy(
    {
        usernameField: 'email',
        session: false
    },
    async function (email, password, done) {
        try {
            const user = await User.findOne({ email });

            if (!user) {
                return done(new AuthError('User not found'));
            }

            const isValidPassword = await user.checkPassword(password);

            if (!isValidPassword) {
                return done(new AuthError('Uncorrect password'));
            }

            return done(null, user);
        } catch (err) {
            done(err);
        }
    }
);
