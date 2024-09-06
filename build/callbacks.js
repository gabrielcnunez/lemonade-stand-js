"use strict";

setTimeout(function () {
  return console.log('I waited 5 seconds');
}, 5000);
console.log('Did not wait. Too eager!');
setTimeout(function () {
  return console.log('I waited 2 seconds');
}, 2000);