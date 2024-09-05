"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.moduleBFunction = moduleBFunction;
exports.moduleBVariable2 = exports.moduleBVariable = void 0;
console.log('Running Module B');
var moduleBVariable = exports.moduleBVariable = 'Named Variable from Module B';
var moduleBVariable2 = exports.moduleBVariable2 = 50;
function moduleBFunction() {
  console.log('Running from Module B');
}
var _default = exports["default"] = {
  a: moduleBVariable,
  b: moduleBVariable2,
  c: moduleBFunction
};
console.log('Finished Running Module B');