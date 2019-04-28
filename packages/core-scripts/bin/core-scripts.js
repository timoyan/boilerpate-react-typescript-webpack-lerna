#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const Webpack = require("webpack");
const Path = require("path");
const WebpackDevServer = require("webpack-dev-server");
const path = require("path");
const paths = require("../src/config/paths");
const argv = yargs.argv;
console.log("core-scripts enter!");
// Object.keys(argv).forEach(function (key) {
//     console.log(`${key}: ${argv[key]}`);
// });
const env = argv.env || "test";
const isBuild = argv.build || false;
const config = require(Path.resolve(__dirname, "../src/config/webpack.config.js"));
const compiler = Webpack(config(env, isBuild));
if (!isBuild) {
    const server = new WebpackDevServer(compiler, {
        contentBase: path.join(paths.appPath, "build"),
        compress: true,
        historyApiFallback: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        watchContentBase: true
    });
    server.listen(8080);
}
else {
    compiler.run((err, stats) => {
        if (err) {
            console.error(err.stack || err);
            if (err.message) {
                console.error(err.message);
            }
            return;
        }
        const info = stats.toJson();
        if (stats.hasErrors()) {
            console.error(info.errors);
        }
        if (stats.hasWarnings()) {
            console.warn(info.warnings);
        }
    });
}
