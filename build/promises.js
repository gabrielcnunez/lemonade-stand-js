"use strict";

var p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    return resolve('p1');
  }, 5000);
});
var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    return resolve('p2');
  }, 3000);
});
var p3 = new Promise(function (resolve, reject) {
  return resolve('p3');
});

// p1.then(() => console.log('I waited 5 seconds'))
//   .then(() => p2)
//   .then(() => console.log('I waited 3 seconds'))
//   .then(() => p3)
//   .then(() => console.log('I did not wait'))

// Promise.race
// Promise.race([p1, p2, p3]).then((p) => console.log(`${p} won the race!`))

// Promise.all
Promise.all([p1, p2, p3]).then(function (p) {
  return console.log("".concat(p, " won the race!"));
}, function (p) {
  return console.log("".concat(p, " was rejected"));
});