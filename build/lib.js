"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateOrderTotal = exports.calculateLemonadePrice = void 0;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var calculateLemonadePrice = exports.calculateLemonadePrice = function calculateLemonadePrice(lemonade) {
  var result = 0;
  for (var key in lemonade) {
    switch (key) {
      case 'lemonJuice':
        result += lemonade[key] * .30;
        break;
      case 'water':
        result += lemonade[key] * .01;
        break;
      case 'sugar':
        result += lemonade[key] * .20;
        break;
      case 'iceCubes':
        result += lemonade[key] * .05;
        break;
      default:
        break;
    }
  }
  return result;
};
var calculateOrderTotal = exports.calculateOrderTotal = function calculateOrderTotal(_ref) {
  var lemonades = _ref.lemonades;
  var result = 0;
  var _iterator = _createForOfIteratorHelper(lemonades),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var lemonade = _step.value;
      result += lemonade.price;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
};