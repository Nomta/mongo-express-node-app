exports.get = function (req, res) {
    res.render('hex', { title: 'Hex', assets: 'assets/hex' });
};
