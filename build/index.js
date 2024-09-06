"use strict";

var _vorpal = _interopRequireDefault(require("vorpal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// const order = {
//   total: 5.00,
//   lemonades: [
//     {
//       lemonJuice: 4,
//       water: 2,
//       sugar: 3, 
//       iceCubes: 7,
//       price: 5
//     },
//     {
//       lemonJuice: 2,
//       water: 2,
//       sugar: 1, 
//       iceCubes: 7,
//       price: 3
//     },
//     {
//       lemonJuice: 3,
//       water: 2,
//       sugar: .5, 
//       iceCubes: 7,
//       price: 4.38
//     },
//     {
//       lemonJuice: 3,
//       water: 2.14,
//       sugar: 1.25, 
//       iceCubes: 7,
//       price: 2.49
//     },
//   ],
//   lemonadeStand: {
//     name: 'Cooksys LemonadeStand'
//   },
//   customer: {
//     name: 'Will',
//     phoneNumber: '0000000000'
//   }
// }

var vorpal = (0, _vorpal["default"])();
vorpal.command('hello <name> [number]', 'Prints Hello to the console').option('-f --file', 'Provide a file name').action(function (args, callback) {
  if (args.options.file) {
    this.log('I see you want to make a file');
  }
  this.log("Hello ".concat(args.name, ", should I call you at ").concat(args.number));
  callback();
});
vorpal.show();