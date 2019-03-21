#!/usr/bin/env node

const yargs = require('yargs');
const Webpack = require('webpack');

const path = require('path');

const argv = yargs.argv;

console.log("core-scripts enter!");
console.log(`isBuild: ${argv.build}`)

const config = require('../config/webpack.config');

const compiler = Webpack(config);

compiler.run((err, status)=>{
    console.log(status);
});