const HTMLWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack = require("webpack");

const { getPathName, getPatternsToCopy, getPathNames } = require("./utils");
const { alias, filesToBeCopy, template, filename } = require("./config");

const pathnames = getPathNames(__dirname);

const isDev = process.env.NODE_ENV === "development";

/* plugins */

const plugins = [
    new HTMLWebpackPlugin({ templateContent: "", filename }),
    new ScriptExtHtmlWebpackPlugin({ defaultAttribute: "defer" }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin(alias)
];

if (!isDev) {
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    plugins.push(new MiniCssExtractPlugin({ filename: getPathName("css") }));
}

if (filesToBeCopy && filesToBeCopy.length) {
    const CopyWebpackPlugin = require("copy-webpack-plugin");
    const patterns = getPatternsToCopy(
        filesToBeCopy,
        pathnames.src,
        pathnames.dist
    );

    plugins.push(new CopyWebpackPlugin(patterns));
}

/* export */

module.exports = plugins;
