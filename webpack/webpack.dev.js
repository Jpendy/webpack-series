const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NAME': JSON.stringify('Jake Dev Env')
        }),
        new ReactRefreshWebpackPlugin()
    ]
};