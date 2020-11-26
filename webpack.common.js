module.exports = {
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            // {
            //     test: /\.svg$/,
            //     use: ['@svgr/webpack']
            // },
            {
                test: /\.(ttf)/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
};