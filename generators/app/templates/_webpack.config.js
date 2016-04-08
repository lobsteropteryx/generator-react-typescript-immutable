var webpack = require("webpack");
var glob = require("glob");

module.exports = {
    entry: {
        src: glob.sync("./src/app/**/(*.ts|*.tsx)")
    },
    output: {
        filename: "dist/[name].bundle.js",
        publicPath: "dist/"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    devtool: "source-map"
};