const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.ttf$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                linit: 100000
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: './src/fonts',
                    to: './fonts'
                }
            ]),
        ]
    }
}