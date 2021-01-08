const HTMLWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const { entry, filesToBeCopy, moduleNames } = require('./config');
const { getPathName, getPatternsToCopy, getPathNames, getPathToAssets } = require('./utils');

const pathnames = getPathNames(__dirname);

const isDev = process.env.NODE_ENV === 'development';

/* plugins */

const HTMLWebpackPlugins = Object.keys(entry).map(
    (filename) =>
        new HTMLWebpackPlugin({
            templateContent: '',
            filename: getPathToAssets(filename),
            chunks: [filename]
        })
);

const plugins = [
    ...HTMLWebpackPlugins,
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
    new MiniCssExtractPlugin({ filename: getPathName('css') }),
    new webpack.ProvidePlugin(moduleNames)
];

if (isDev) {
    const WebpackNotifierPlugin = require('webpack-notifier');
    plugins.push(new WebpackNotifierPlugin());
} else {
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    plugins.push(new CleanWebpackPlugin());
}

if (filesToBeCopy && filesToBeCopy.length) {
    const CopyWebpackPlugin = require('copy-webpack-plugin');
    const patterns = getPatternsToCopy(filesToBeCopy, pathnames.src, pathnames.dist);

    plugins.push(new CopyWebpackPlugin(patterns));
}

/* export */

module.exports = plugins;
