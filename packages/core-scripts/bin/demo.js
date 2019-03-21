#!/usr/bin/env node

let yargs = require('yargs');
let argv = yargs.argv;

// If not empty, return value
// If empty, return true
// Otherwise return undefined
// argv.first

console.log(__dirname);
console.log(__filename);
console.log(process.cwd());
