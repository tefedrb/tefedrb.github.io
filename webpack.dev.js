const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3030,
        open: true
    }
});