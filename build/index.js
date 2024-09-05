"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var lemonade = _defineProperty(_defineProperty(_defineProperty({
  lemonJuice: 3,
  water: 3,
  sugar: 1.5,
  iceCubes: 10
}, console.log('Hello World'), 'Hi'), "calculatePrice", function calculatePrice() {
  return this.lemonJuice * 0.3 + this.water * 0.01 + this.sugar * 0.25 + this.iceCubes * 0.05 + 0.75;
}), "calculatePriceLambda", function calculatePriceLambda() {
  return lemonJuice * 0.3 + water * 0.01 + sugar * 0.25 + iceCubes * 0.05 + 0.75;
});
console.log(lemonade.calculatePrice());
console.log(lemonade.calculatePriceLambda());

// function updateLemonade({calculatePrice}, lemonJuice, water, sugar, iceCubes) {
//   return {
//     lemonJuice,
//     water,
//     sugar,
//     iceCubes,
//     calculatePrice
//   }
// }

// lemonade.water = 8

// // console.log(updateLemonade(lemonade, 5, 2.5, 3, 7))
// console.log({ ...lemonade, water: 5})
// console.log(lemonade)
// console.log(updateLemonade(lemonade, 1, 2, 3, 20))

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]]
// const numbersCopy = [...numbers]
// numbersCopy[10] = [...numbers[10]]

// numbersCopy[10][0] = 5

// console.log(numbers)
// console.log(numbersCopy)

// let { water: willsCoolWater, lemonJuice, sugar, iceCubes } = lemonade

// console.log(willsCoolWater)
// console.log(lemonJuice)
// console.log(sugar)
// console.log(iceCubes)