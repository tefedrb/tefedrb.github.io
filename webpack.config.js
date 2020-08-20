const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            }
        ]
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 3030,
        open: true
    },
    plugins: [
        HtmlWebPackPluginConfig
    ]
};