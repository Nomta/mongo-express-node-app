/* pathnames */

exports.entry = {
    main: './index.js',
    hex: './pages/hex/index.js'
};

exports.dirnames = {
    /* main paths */
    src: 'client/src',
    dist: 'public',
    /* sub directories */
    assets: 'assets',
    fonts: 'assets',
    images: 'images',
    scripts: 'scripts',
    styles: 'styles'
};

exports.fileNamePatterns = {
    development: '[name]',
    production: '[name].[hash:5]',
    stats: '[name].[hash:5]'
};

exports.filesToBeCopy = [];
exports.filenames = {
    main: './../views/partials/assets/main.hbs',
    hex: './../views/partials/assets/hex.hbs'
};

/* dependencies */

exports.alias = {
    lodash: 'lodash',
    jsx: 'jsx'
};

/* devServer */

exports.port = 30001;
exports.proxy = {
    '/': 'http://localhost:30000'
};
