const User = require('../models/user');
const AuthError = require('../error/auth-error');
const { sendMail } = require('../service/nodemailer');
const { v4: uuid } = require('uuid');

module.exports.post = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const token = uuid();
        const user = await createUser(email, password, token);

        const { url } = await sendMail({
            from: 'from@domain.com',
            to: email,
            subject: 'Подтвердите почту',
            context: { token },
            template: 'confirm-registration'
        });

        res.send({ url });
    } catch (err) {
        if (err instanceof AuthError) {
            return res.send(401, { message: err.message });
        }
        return next(err);
    }
};

module.exports.params = async (req, res, next) => {
    try {
        const user = await User.findOne({
            verificationToken: req.params.token
        });

        if (!user) {
            return res.send(400, 'Ссылка подтверждения недействительна или устарела');
        }

        user.verificationToken = undefined;
        await user.save();

        req.session.user = user._id;
        res.redirect('/');
    } catch (err) {
        return next(err);
    }
};

async function createUser(email, password, verificationToken) {
    if (!email || !password) {
        throw new AuthError('Uncorrect data');
    }

    try {
        let user = await User.findOne({ email, verificationToken });

        if (user) {
            throw new AuthError('User exists');
        }

        user = await User.create({ email, verificationToken });
        await user.setPassword(password);
        await user.save();

        return user;
    } catch (err) {
        throw err;
    }
}
