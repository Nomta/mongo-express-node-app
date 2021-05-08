const { Passport } = require('passport');
const passport = new Passport();

const localStrategy = require('./strategies/local');

passport.use(localStrategy);

module.exports = passport;
