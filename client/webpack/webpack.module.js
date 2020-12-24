const {
    getBabelLoader,
    getCSSLoaders,
    getFileLoaders,
    getPathNames
} = require("./utils");

const pathnames = getPathNames(__dirname);

/* module */

const webpackModule = {
    rules: [
        {
            test: /\.css$/,
            use: getCSSLoaders()
        },
        {
            test: /\.s[ac]ss$/,
            use: getCSSLoaders("sass-loader")
        },
        {
            test: /\.(png|jpg|svg|gif)$/,
            use: getFileLoaders(pathnames.images)
        },
        {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: getFileLoaders(pathnames.fonts)
            // }, {
            //     test: /\.hbs$/,
            //     exclude: /node_modules/,
            //     loader: 'handlebars-loader',
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: getBabelLoader("@babel/preset-react")
        }
    ]
};

/* export */

module.exports = webpackModule;
