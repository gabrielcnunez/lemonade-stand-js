"use strict";

var lemonJuice = 3;
var water = 3;
var sugar = 1.5;
var iceCubes = 10;
var lemonade = {
  lemonJuice: lemonJuice,
  water: water,
  sugar: sugar,
  iceCubes: iceCubes,
  getLemonJuice: function getLemonJuice() {
    return this.lemonJuice;
  },
  calculatePrice: function calculatePrice() {
    return this.lemonJuice * 0.3 + this.water * 0.01 + this.sugar * 0.25 + this.iceCubes * 0.05 + 0.75;
  }
};
console.log(lemonade.getLemonJuice());
console.log(lemonade.calculatePrice());
lemonade.water = 6;
lemonade.lemonJuice = 4;
console.log(lemonade.calculatePrice());