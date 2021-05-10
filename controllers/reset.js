const { v4: uuid } = require('uuid');
const { sendMail } = require('../service/nodemailer');
const User = require('../models/user');
const AuthError = require('../error/auth-error');

// exports.get = function (req, res) {
//     res.render("reset", { title: "Reset" });
// };

module.exports.post = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        const token = uuid();

        user.resetToken = token;
        await user.save();

        const { url } = await sendMail({
            from: 'from@domain.com',
            to: email,
            subject: 'Сброс пароля',
            context: { token },
            template: 'reset-password'
        });

        res.send({ url });
    } catch (err) {
        return next(err);
    }
};

module.exports.reset = async (req, res, next) => {
    const { password, token } = req.body;

    if (!password) {
        throw new AuthError('Uncorrect data');
    }

    try {
        const user = await User.findOne({
            resetToken: token || req.params.token
        });

        if (!user) {
            return res.send(400, 'Ссылка для сброса пароля недействительна или устарела');
        }

        user.resetToken = undefined;
        await user.setPassword(password);
        await user.save();

        req.session.user = user._id;
        res.redirect('/');
    } catch (err) {
        return next(err);
    }
};
