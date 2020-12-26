const HTMLWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const webpack = require('webpack');

const {
    getPathName,
    getPatternsToCopy,
    getPathNames,
    getPathToAssets
} = require('./utils');
const { alias, filesToBeCopy, filenames } = require('./config');

const pathnames = getPathNames(__dirname);
const HTMLWebpackPlugins = filenames.map(
    (filename) =>
        new HTMLWebpackPlugin({
            templateContent: '',
            filename: getPathToAssets(filename),
            chunks: [filename]
        })
);

const isDev = process.env.NODE_ENV === 'development';

/* plugins */

const plugins = [
    ...HTMLWebpackPlugins,
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
    new webpack.ProvidePlugin(alias)
];

if (isDev) {
    const WebpackNotifierPlugin = require('webpack-notifier');
    plugins.push(new WebpackNotifierPlugin());
} else {
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
    plugins.push(new CleanWebpackPlugin());
    plugins.push(new MiniCssExtractPlugin({ filename: getPathName('css') }));
}

if (filesToBeCopy && filesToBeCopy.length) {
    const CopyWebpackPlugin = require('copy-webpack-plugin');
    const patterns = getPatternsToCopy(
        filesToBeCopy,
        pathnames.src,
        pathnames.dist
    );

    plugins.push(new CopyWebpackPlugin(patterns));
}

/* export */

module.exports = plugins;
