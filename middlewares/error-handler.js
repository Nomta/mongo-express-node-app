module.exports = function (err, req, res, next) {
    if (req.app.get('env') === 'development') {
        res.locals.message = err.message;
        res.locals.error = err;
    } else {
        res.locals.message = 'Internal server error';
        res.locals.error = {};
    }

    res.status(err.status || 500);

    if (req.xhr || req.headers.accept.includes('json')) {
        const { error, message } = res.locals;
        return res.json({ error, message });
    }

    if (err.status === 401) {
        return res.redirect('/login');
    }

    res.render('error');
};
