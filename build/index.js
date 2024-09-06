"use strict";

// const lemonade =  {
//   lemonJuice: 3,
//   water: 3,
//   sugar: 1.5,
//   iceCubes: 10,
//   [console.log('Hello World')]: 'Hi',
//   calculatePrice() {
//     return (
//       this.lemonJuice * 0.3 +
//       this.water * 0.01 + 
//       this.sugar * 0.25 + 
//       this.iceCubes * 0.05 + 
//       0.75
//     )
//   },
//   calculatePriceLambda: () => {
//     return (
//       lemonJuice * 0.3 +
//       water * 0.01 + 
//       sugar * 0.25 + 
//       iceCubes * 0.05 + 
//       0.75
//     )
//   }
// }

// console.log(lemonade.calculatePrice())
// console.log(lemonade.calculatePriceLambda())

// function updateLemonade (
//   {calculatePrice}, 
//   lemonJuice, 
//   water, 
//   sugar, 
//   iceCubes) 
//   {
//   return {
//     lemonJuice,
//     water,
//     sugar,
//     iceCubes,
//     calculatePrice
//   }
// }

var a = 10;
var updateLemonade = function updateLemonade(_ref, lemonJuice, water, sugar, iceCubes) {
  var calculatePrice = _ref.calculatePrice;
  return {
    lemonJuice: lemonJuice,
    water: water,
    sugar: sugar,
    iceCubes: iceCubes,
    calculatePrice: calculatePrice,
    a: a
  };
};
var outer = function outer() {
  var x = 2;
  var inner = function inner() {
    var y = 5;
    return x + y;
  };
  return inner;
};
var containedInner = outer();
console.log(containedInner());

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

// function add (x, y) {
//   return x + y
// }

// function increment () {
//   return x + 1
// }

// const increment = x => x + 1

// console.log((x => x + 1)(5))