"use strict";

var _vorpal = _interopRequireDefault(require("vorpal"));
var _lib = require("./lib");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var vorpal = (0, _vorpal["default"])();
vorpal.command('createOrder <name> <phoneNumber>', 'Create an order and saves it as a JSON file').action(function (_ref) {
  var name = _ref.name,
    phoneNumber = _ref.phoneNumber;
  return this.prompt({
    type: 'number',
    name: 'numLemonades',
    "default": 1,
    message: 'How many lemonades would you like to order?'
  }).then(_lib.createQuestionsArray).then((0, _lib.promptIngredientQuestions)(this)).then(_lib.createLemonadesArray).then(_lib.addPriceToLemonades).then((0, _lib.createOrderObject)(name, phoneNumber)).then(_lib.writeOrderToFile);
});
vorpal.command('getOrders <lemonadeStand>', 'Get all orders for the given lemonade stand').action(function (_ref2, callback) {
  var lemonadeStand = _ref2.lemonadeStand;
  var orders = (0, _lib.readAllFiles)(lemonadeStand);
  this.log("There are ".concat(orders.length, " orders at ").concat(lemonadeStand));
  var _iterator = _createForOfIteratorHelper(orders),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var order = _step.value;
      this.log('Order:');
      this.log("Total Price: ".concat(order.total));
      this.log('Lemonades:');
      this.log(order.lemonades);
      this.log('Customer:');
      this.log(order.customer);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  callback();
});
vorpal.delimiter('lemonade-stand$').show();