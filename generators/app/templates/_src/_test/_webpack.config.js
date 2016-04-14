var webpack = require("webpack");

module.exports = {
    entry: {
        main: './src/test/main.ts'
    },
    output: {
        filename: './src/test/[name].bundle.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'source-map'
};