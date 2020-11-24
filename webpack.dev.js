const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");


const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = merge(common, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3030,
        open: true
    },
    plugins: [
        HtmlWebPackPluginConfig
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});