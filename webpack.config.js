var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/playground/jsClosures.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /(node_modules)/
            }
        ]
    }
}