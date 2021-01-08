const isDev = process.env.NODE_ENV === 'development';

/* pathnames */

exports.entry = {
    main: './index.js',
    hex: './pages/hex/index.js'
};

exports.dirnames = {
    /* main paths */
    src: 'client/src',
    dist: isDev ? 'client/dist' : 'public',
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

exports.alias = {
    '@': ''
};

exports.filesToBeCopy = [];

exports.pathToAssets = 'views/partials/assets/';

/* dependencies */

exports.moduleNames = {
    lodash: 'lodash',
    React: 'react'
};

/* devServer */

exports.port = 30001;
exports.proxy = {
    '/': 'http://localhost:30000'
};
