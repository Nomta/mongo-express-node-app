const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const expressHbs = require('express-handlebars');
const HttpError = require('./error/http-error');
const sendHttpError = require('./middlewares/send-http-error');
const config = require('./config');

const indexRouter = require('./routes/index');
// const userRouter = require('./routes/users');
// const caseRouter = require('./routes/cases');

const isProd = process.env.NODE_ENV === 'production';
const staticPath = path.join(__dirname, isProd ? 'public' : 'client/dist');

const app = express();

/* view engine setup */

app.engine('hbs', expressHbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

/* app setup */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(staticPath));
app.use(sendHttpError);

/* routes */

app.use('/', indexRouter);
// app.use('/users', userRouter);
// app.use('/cases', caseRouter);

/* catch 404 and forward to error handler */

app.use(function (req, res, next) {
    next(createError(404));
});

/* error handler */

app.use(function (err, req, res) {
    if (err.status === 401) {
        res.redirect('/login');
    }

    // set locals, only providing error in development
    if (req.app.get('env') === 'development') {
        if (err instanceof HttpError) {
            return res.sendHttpError(err);
        }
        res.locals.message = err.message;
        res.locals.error = err;
    } else {
        res.locals.message = 'Internal server error';
        res.locals.error = {};
    }

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
