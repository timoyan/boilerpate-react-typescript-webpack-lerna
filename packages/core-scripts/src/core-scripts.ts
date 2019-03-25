#!/usr/bin/env node

import { Stats } from "webpack";
import * as yargs from "yargs";
import * as Webpack from "webpack";
import * as Path from "path";
import * as  WebpackDevServer from "webpack-dev-server";

const argv = yargs.argv;

console.log("core-scripts enter!");

// Object.keys(argv).forEach(function (key) {
//     console.log(`${key}: ${argv[key]}`);
// });

const env = argv.env || 'test';
const isBuild = argv.build || false;

const config = require(Path.resolve(__dirname, '../src/config/webpack.config.js'));

const compiler = Webpack(config(env, isBuild));

if (!isBuild) {
    const server = new WebpackDevServer(compiler, {
        stats:{
            colors: true
        }
    });

    server.listen(8080);
}
else {
    compiler.run((err: Error, stats: Stats) => {
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
