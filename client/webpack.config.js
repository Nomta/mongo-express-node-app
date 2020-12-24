const { merge } = require("lodash");
const config = require("./webpack/webpack.common");

const isDev = process.env.NODE_ENV === "development";

module.exports = merge(
    isDev
        ? require("./webpack/webpack.dev")
        : require("./webpack/webpack.prod"),
    config
);
