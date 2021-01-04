const { port, proxy } = require('./config');

module.exports = {
    mode: 'development',
    devServer: { proxy, port, hot: true },
    devtool: 'inline-source-map'
};
