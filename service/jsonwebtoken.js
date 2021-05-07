const jwt = require('jsonwebtoken');
const config = require('../config');

exports.sign = function (payload) {
    const { privateKey, options } = config.jwt;
    return jwt.sign(payload, privateKey, options);
};

exports.verify = function (token) {
    const { privateKey } = config.jwt;

    try {
        return jwt.verify(token, privateKey);
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
        }
        throw err;
    }
};
