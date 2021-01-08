const path = require('path');
const { mapValues } = require('lodash');
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
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    resolve: {
        alias: Object.assign(
            {},
            mapValues(alias, (prefix) => path.resolve(__dirname, pathnames.src, prefix))
        )
    },
    module: require('./webpack.module'),
    plugins: require('./webpack.plugins')
};

/* export */

module.exports = config;
