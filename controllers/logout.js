const Session = require('../models/session');

exports.post = async function (req, res) {
    const token = req.cookies.token;
    if (!token) {
        res.sendStatus(401);
    }

    // await Session.remove({token})

    //   req.session = null;

    const options = {
        maxAge: 0,
        sameSite: 'Strict',
        // signed: true,
        httpOnly: true
    };

    res.clearCookie('token', options);
    res.json({ user: '' });
};
