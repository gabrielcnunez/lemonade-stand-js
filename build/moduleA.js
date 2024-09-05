"use strict";

console.log('Running Module A');
require('./moduleB');
require('./moduleB');
require('./moduleB');
require('./moduleB');
require('./moduleB');
require('./moduleB');
require('./moduleB');
require('./moduleB');
var moduleBImports = require('./moduleB');
moduleBImports.internalFunction();
var moduleBImportsAgain = require('./moduleB');
console.log(moduleBImportsAgain.internalVariable);
console.log('Finish running module A');