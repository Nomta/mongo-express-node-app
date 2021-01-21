const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressHbs = require('express-handlebars');
const errorHandler = require('./middlewares/error-handler');
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

/* routes */

app.use('/', indexRouter);
// app.use('/users', userRouter);
// app.use('/cases', caseRouter);

/* catch 404 and forward to error handler */

// app.use(function (req, res, next) {
//     next(createError(404));
// });

/* error handler */

app.use(errorHandler);

module.exports = app;
