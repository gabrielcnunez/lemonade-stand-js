"use strict";

console.log('Running Module B');
var internalVariable = 'Hey from Module B';
function internalFunction() {
  console.log('Running inside the internalFunction of Module B');
}
module.exports = {
  internalFunction: internalFunction,
  internalVariable: internalVariable
};
console.log('Finished Running Module A');