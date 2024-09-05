"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var lemonade = _defineProperty(_defineProperty({
  lemonJuice: 3,
  water: 3,
  sugar: 1.5,
  iceCubes: 10
}, console.log('Hello World'), 'Hi'), "calculatePrice", function calculatePrice() {
  return this.lemonJuice * 0.3 + this.water * 0.01 + this.sugar * 0.25 + this.iceCubes * 0.05 + 0.75;
});
function updateLemonade(_ref, lemonJuice, water, sugar, iceCubes) {
  var calculatePrice = _ref.calculatePrice;
  return {
    lemonJuice: lemonJuice,
    water: water,
    sugar: sugar,
    iceCubes: iceCubes,
    calculatePrice: calculatePrice
  };
}
lemonade.water = 8;

// console.log(updateLemonade(lemonade, 5, 2.5, 3, 7))
console.log(_objectSpread(_objectSpread({}, lemonade), {}, {
  water: 5
}));
console.log(lemonade);
console.log(updateLemonade(lemonade, 1, 2, 3, 20));
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]];
var numbersCopy = [].concat(numbers);
numbersCopy[10] = _toConsumableArray(numbers[10]);
numbersCopy[10][0] = 5;
console.log(numbers);
console.log(numbersCopy);
var willsCoolWater = lemonade.water,
  lemonJuice = lemonade.lemonJuice,
  sugar = lemonade.sugar,
  iceCubes = lemonade.iceCubes;
console.log(willsCoolWater);
console.log(lemonJuice);
console.log(sugar);
console.log(iceCubes);