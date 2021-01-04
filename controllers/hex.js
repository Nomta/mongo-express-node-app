exports.get = function (req, res) {
    res.render('index', { title: 'Hex', assets: 'assets/hex' });
};
