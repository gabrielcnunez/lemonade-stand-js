"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var add = function add(a, b) {
  return a + b;
};
var _curry = function curry(f) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return function (a) {
      return a.length >= f.length ? f.apply(void 0, _toConsumableArray(a)) : _curry(f, a);
    }([].concat(_toConsumableArray(arr), args));
  };
};
var curriedAdd = _curry(add);
var increment = curriedAdd(1);
console.log(curriedAdd(1, 2, 3, 4, 5, 6));

// const add5 = curriedAdd(5)

// console.log(add(1, 2))
// console.log(curriedAdd(1)(2))

// console.log(increment(10))

// console.log(add5(20))

// const f = (num, ...a) => console.log(a)

// f(10, 20, 30, 40, 'Hello', true, [1, 2, 3], { a: 'Bye', b: 'Hi' })

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// f(...a)
// f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)