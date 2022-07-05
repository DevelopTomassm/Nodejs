"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Escenario = _interopRequireDefault(require("./models/Escenario"));

var _Superheroe = _interopRequireDefault(require("./models/Superheroe"));

var resolvers = {
  Query: {
    superheroes: function superheroes() {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var superheroes;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _Superheroe["default"].find();

              case 2:
                superheroes = _context.sent;
                return _context.abrupt("return", superheroes);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    escenarios: function escenarios() {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var escenarios;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _Escenario["default"].find();

              case 2:
                escenarios = _context2.sent;
                return _context2.abrupt("return", escenarios);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  },
  Mutation: {
    createSuperheroe: function createSuperheroe(_, _ref) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var input, newSuperheroe;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                input = _ref.input;
                newSuperheroe = new _Superheroe["default"](input);
                _context3.next = 4;
                return newSuperheroe.save();

              case 4:
                return _context3.abrupt("return", newSuperheroe);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    deleteSuperheroe: function deleteSuperheroe(_, _ref2) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        var _id, superheroeDelete;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _id = _ref2._id;
                _context4.next = 3;
                return _Superheroe["default"].findById(_id);

              case 3:
                superheroeDelete = _context4.sent;
                return _context4.abrupt("return", superheroeDelete);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    updateSuperheroe: function updateSuperheroe(_, _ref3) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
        var _id, input;

        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _id = _ref3._id, input = _ref3.input;
                _context5.next = 3;
                return _Superheroe["default"].findByIdAndUpdate(_id, input, {
                  "new": true
                });

              case 3:
                return _context5.abrupt("return", _context5.sent);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    createEscenario: function createEscenario(_, _ref4) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        var input, newEscenario;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                input = _ref4.input;
                newEscenario = new _Escenario["default"](input);
                _context6.next = 4;
                return newEscenario.save();

              case 4:
                return _context6.abrupt("return", newEscenario);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    deleteEscenario: function deleteEscenario(_, _ref5) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _id, escenarioDelete;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _id = _ref5._id;
                _context7.next = 3;
                return _Escenario["default"].findById(_id);

              case 3:
                escenarioDelete = _context7.sent;
                return _context7.abrupt("return", escenarioDelete);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    updateEscenario: function updateEscenario(_, _ref6) {
      return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
        var _id, input, escenarioUpdate;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _id = _ref6._id, input = _ref6.input;
                _context8.next = 3;
                return _Escenario["default"].findById(_id, input, {
                  "new": true
                });

              case 3:
                escenarioUpdate = _context8.sent;
                return _context8.abrupt("return", escenarioUpdate);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    }
  }
};
exports.resolvers = resolvers;