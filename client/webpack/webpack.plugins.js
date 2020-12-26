const HTMLWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpack = require('webpack');

const { getPathName, getPatternsToCopy, getPathNames } = require('./utils');
const { alias, filesToBeCopy, filenames } = require('./config');

const pathnames = getPathNames(__dirname);
const HTMLWebpackPlugins = [];

const isDev = process.env.NODE_ENV === 'development';

/* plugins */

for (let filename in filenames) {
    HTMLWebpackPlugins.push(
        new HTMLWebpackPlugin({
            templateContent: '',
            filename: filenames[filename],
            chunks: [filename]
        })
    );
}

const plugins = [
    ...HTMLWebpackPlugins,
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }),
    new webpack.ProvidePlugin(alias)
    // new CleanWebpackPlugin()
];

if (isDev) {
    const WebpackNotifierPlugin = require('webpack-notifier');
    plugins.push(new WebpackNotifierPlugin());
} else {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
