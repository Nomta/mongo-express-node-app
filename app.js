const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const expressHbs = require("express-handlebars");

const indexRouter = require("./routes/index");
// const userRouter = require('./routes/users');
// const caseRouter = require('./routes/cases');

const app = express();

/* view engine setup */

app.engine("hbs", expressHbs({ extname: "hbs" }));
app.set("view engine", "hbs");

/* app setup */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* routes */

app.use("/", indexRouter);
// app.use('/users', userRouter);
// app.use('/cases', caseRouter);

/* catch 404 and forward to error handler */

app.use(function (req, res, next) {
    next(createError(404));
});

/* error handler */

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
