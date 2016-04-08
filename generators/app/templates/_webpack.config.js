var webpack = require("webpack");
var glob = require("glob");

module.exports = {
    entry: {
        <%=name%>: glob.sync("./src/app/**/(*.ts|*.tsx)")
    },
    output: {
        filename: "dist/[name].js",
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