const path = require('path');
const { getPathName, getPathNames } = require('./utils');
const { entry, alias } = require('./config');

const pathnames = getPathNames(__dirname);

/* config */

const config = {
    context: path.resolve(__dirname, pathnames.src),
    entry,
    output: {
        filename: getPathName('js'),
        path: path.resolve(__dirname, pathnames.dist),
        publicPath: ''
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    resolve: {
        alias: Object.assign({}, alias, {
            '@': path.resolve(__dirname, pathnames.src),
            jsx: path.resolve(__dirname, pathnames.src, 'libs/jsx')
        })
    },
    module: require('./webpack.module'),
    plugins: require('./webpack.plugins')
};

/* export */

module.exports = config;
