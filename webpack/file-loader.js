const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
    return {
        module: {
            rules: [{
                test: /\.(gif|png|jpe?g|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/',
                    publicPath: '../img'
                }
            }]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: './src/img',
                    to: './img'
                }
            ]),
        ]
    }
};