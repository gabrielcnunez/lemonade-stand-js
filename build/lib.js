"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeOrderToFile = exports.writeFileSync = exports.updateOrderTotal = exports.readAllFiles = exports.promptIngredientQuestions = exports.map = exports.createQuestionsArray = exports.createOrderObject = exports.createLemonadesArray = exports.createLemonade = exports.calculateLemonadePrice = exports.buildQuestionArray = exports.addPriceToLemonades = exports.addLemonadeToOrder = void 0;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _curry = function curry(f) {
  var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return function (a) {
      return a.length >= f.length ? f.apply(void 0, _toConsumableArray(a)) : _curry(f, a);
    }([].concat(args, args));
  };
};
var map = exports.map = function map(f) {
  return function (reducer) {
    return function (acc, curr, idx, arr) {
      return reducer(acc, f(curr, idx, arr), idx, arr);
    };
  };
};
var calculateLemonadePrice = exports.calculateLemonadePrice = function calculateLemonadePrice(lemonade) {
  var result = 0.75;
  for (var key in lemonade) {
    switch (key) {
      case 'lemonJuice':
        result += lemonade[key] * 0.3;
        break;
      case 'water':
        result += lemonade[key] * 0.01;
        break;
      case 'sugar':
        result += lemonade[key] * 0.2;
        break;
      case 'iceCubes':
        result += lemonade[key] * 0.05;
        break;
      default:
        break;
    }
  }
  return result;
};
var calculateOrderTotal = function calculateOrderTotal(lemonades) {
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
var writeFileSync = exports.writeFileSync = function writeFileSync(fileName, order) {
  _fs["default"].writeFileSync(fileName, JSON.stringify(order));
};
var readAllFiles = exports.readAllFiles = function readAllFiles(dirName) {
  var orders = [];
  var _iterator2 = _createForOfIteratorHelper(_fs["default"].readdirSync(dirName)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var name = _step2.value;
      orders.push(JSON.parse(_fs["default"].readFileSync(dirName + '/' + name)));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return orders;
};
var buildQuestionArray = exports.buildQuestionArray = function buildQuestionArray(val, i) {
  return [{
    type: 'number',
    name: "lemonJuice".concat(i),
    message: "How many cups of lemon juice do you want in lemonade ".concat(i + 1, "?")
  }, {
    type: 'number',
    name: "water".concat(i),
    message: "How many cups of water do you want in lemonade ".concat(i + 1, "?")
  }, {
    type: 'number',
    name: "sugar".concat(i),
    message: "How many cups of sugar do you want in lemonade ".concat(i + 1, "?")
  }, {
    type: 'number',
    name: "iceCubes".concat(i),
    message: "How many ice cubes do you want in lemonade ".concat(i + 1, "?")
  }];
};
var createLemonade = exports.createLemonade = _curry(function (response, curr, i) {
  return {
    lemonJuice: Number.parseInt(response['lemonJuice' + i]),
    water: Number.parseInt(response['water' + i]),
    sugar: Number.parseInt(response['sugar' + i]),
    iceCubes: Number.parseInt(response['iceCubes' + i])
  };
});
var addLemonadeToOrder = exports.addLemonadeToOrder = function addLemonadeToOrder(acc, curr) {
  return _objectSpread(_objectSpread({}, acc), {}, {
    lemonades: [].concat(_toConsumableArray(acc.lemonades), [_objectSpread(_objectSpread({}, curr), {}, {
      price: calculateLemonadePrice(curr)
    })])
  });
};
var updateOrderTotal = exports.updateOrderTotal = function updateOrderTotal(order) {
  return _objectSpread(_objectSpread({}, order), {}, {
    total: calculateOrderTotal(order.lemonades)
  });
};
var split = function split(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    key = _ref2[0],
    val = _ref2[1];
  return [key.split(/(\d+)/), val];
};
var parseNums = function parseNums(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    _ref4$ = _slicedToArray(_ref4[0], 2),
    key = _ref4$[0],
    idx = _ref4$[1],
    val = _ref4[1];
  return [key, Number.parseInt(idx), Number.parseInt(val)];
};
var makeLemonades = function makeLemonades(acc, _ref5) {
  var _ref6 = _slicedToArray(_ref5, 3),
    key = _ref6[0],
    idx = _ref6[1],
    val = _ref6[2];
  return acc[idx] ? (acc[idx][key] = val) && acc : [].concat(_toConsumableArray(acc), [_defineProperty({}, key, val)]);
};
var compose = function compose() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};
var createLemonadesArray = exports.createLemonadesArray = function createLemonadesArray(response) {
  return Object.entries(response).reduce(compose(map(split), map(parseNums))(makeLemonades), []);
};
var createQuestionsArray = exports.createQuestionsArray = function createQuestionsArray(_ref8) {
  var numLemonades = _ref8.numLemonades;
  return _toConsumableArray(Array(Number.parseInt(numLemonades))).flatMap(buildQuestionArray);
};
var promptIngredientQuestions = exports.promptIngredientQuestions = function promptIngredientQuestions(command) {
  return command.prompt(questions);
};
var addPriceToLemonades = exports.addPriceToLemonades = function addPriceToLemonades(lemonadesWithoutPrice) {
  return lemonadesWithoutPrice.map(function (lemonade) {
    return _objectSpread(_objectSpread({}, lemonade), {}, {
      price: calculateLemonadePrice(lemonade)
    });
  });
};
var createOrderObject = exports.createOrderObject = function createOrderObject(name, phoneNumber) {
  return function (lemonades) {
    return {
      customer: {
        name: name,
        phoneNumber: phoneNumber
      },
      lemonadeStand: {
        name: 'Cooksys Lemonade Stand'
      },
      lemonades: lemonades,
      total: lemonades.reduce(function (acc, curr) {
        return acc + curr.price;
      }, 0)
    };
  };
};
var writeOrderToFile = exports.writeOrderToFile = function writeOrderToFile(order) {
  return writeFileSync(order.lemonadeStand.name + '/' + order.customer.name + '.json', order);
};