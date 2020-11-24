const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// Default minimizer for JavaScript & Webpack
const TerserPlugin = require("terser-webpack-plugin");

////////////////////////////////////////////////////////////////


const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true
    }
});
////////////////////////////////////////////////////////////////

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            HtmlWebPackPluginConfig
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css"}),
        new CleanWebpackPlugin()
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