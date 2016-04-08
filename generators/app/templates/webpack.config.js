var webpack = require("webpack");

module.exports = {
    entry: {
        app: './src/app/main.ts'
    },
    output: {
        filename: 'dist/[name].bundle.js',
        publicPath: 'dist/'
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