"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderUsuarios = exports.renderSuperheroes = exports.renderInicio = exports.renderEscenarios = exports.renderDefault = exports.paginaPersonajes = exports.paginaInicioPrincipal = exports.paginaInicio = exports.paginaFormularioUsuarios = exports.paginaFormularioSuperheroes = exports.paginaFormularioEscenarios = exports.anadirUsuario = exports.anadirSuperheroe = exports.anadirEscenario = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _Escenario = _interopRequireDefault(require("../models/Escenario"));

var _Superheroe = _interopRequireDefault(require("../models/Superheroe"));

var renderDefault = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var taskUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Usuario["default"].find().lean();

          case 3:
            taskUser = _context.sent;
            res.render("index", {
              taskUser: taskUser
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log({
              error: _context.t0
            });
            return _context.abrupt("return", res.render("error", {
              errorMessage: _context.t0.message
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function renderDefault(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderDefault = renderDefault;

var renderInicio = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var taskInicio;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Usuario["default"].find().lean();

          case 3:
            taskInicio = _context2.sent;
            res.render("inicio", {
              taskInicio: taskInicio
            });
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log({
              error: _context2.t0
            });
            return _context2.abrupt("return", res.render("error", {
              errorMessage: _context2.t0.message
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function renderInicio(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.renderInicio = renderInicio;

var renderUsuarios = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var taskUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Usuario["default"].find().lean();

          case 3:
            taskUser = _context3.sent;
            res.render("formUser", {
              taskUser: taskUser
            });
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log({
              error: _context3.t0
            });
            return _context3.abrupt("return", res.render("error", {
              errorMessage: _context3.t0.message
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function renderUsuarios(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.renderUsuarios = renderUsuarios;

var renderEscenarios = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var taskEscenario;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Escenario["default"].find().lean();

          case 3:
            taskEscenario = _context4.sent;
            res.render("formEscenario", {
              taskEscenario: taskEscenario
            });
            _context4.next = 11;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log({
              error: _context4.t0
            });
            return _context4.abrupt("return", res.render("error", {
              errorMessage: _context4.t0.message
            }));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function renderEscenarios(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.renderEscenarios = renderEscenarios;

var renderSuperheroes = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var taskSuperheroe;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Superheroe["default"].find().lean();

          case 3:
            taskSuperheroe = _context5.sent;
            res.render("formSuperheroe", {
              taskSuperheroe: taskSuperheroe
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log({
              error: _context5.t0
            });
            return _context5.abrupt("return", res.render("error", {
              errorMessage: _context5.t0.message
            }));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function renderSuperheroes(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.renderSuperheroes = renderSuperheroes;

var anadirUsuario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var usuario, usuarioGuardado;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            usuario = (0, _Usuario["default"])(req.body);
            _context6.next = 3;
            return usuario.save();

          case 3:
            usuarioGuardado = _context6.sent;
            console.log(usuario);
            res.send("saved");

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function anadirUsuario(_x11, _x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();

exports.anadirUsuario = anadirUsuario;

var anadirEscenario = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var escenario, escenarioGuardado;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            escenario = (0, _Escenario["default"])(req.body);
            _context7.next = 3;
            return escenario.save();

          case 3:
            escenarioGuardado = _context7.sent;
            console.log(escenario);
            res.send("saved");

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function anadirEscenario(_x14, _x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();

exports.anadirEscenario = anadirEscenario;

var anadirSuperheroe = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var superheroe, superheroeGuardado;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            superheroe = (0, _Superheroe["default"])(req.body);
            _context8.next = 3;
            return superheroe.save();

          case 3:
            superheroeGuardado = _context8.sent;
            console.log(superheroe);
            res.send("saved");

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function anadirSuperheroe(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

exports.anadirSuperheroe = anadirSuperheroe;

var paginaInicioPrincipal = function paginaInicioPrincipal(req, res) {
  res.render("inicio");
};

exports.paginaInicioPrincipal = paginaInicioPrincipal;

var paginaInicio = function paginaInicio(req, res) {
  res.render("index");
};

exports.paginaInicio = paginaInicio;

var paginaFormularioUsuarios = function paginaFormularioUsuarios(req, res) {
  res.render("formUser");
};

exports.paginaFormularioUsuarios = paginaFormularioUsuarios;

var paginaFormularioEscenarios = function paginaFormularioEscenarios(req, res) {
  res.render("formEscenario");
};

exports.paginaFormularioEscenarios = paginaFormularioEscenarios;

var paginaFormularioSuperheroes = function paginaFormularioSuperheroes(req, res) {
  res.render("formSuperheroe");
};

exports.paginaFormularioSuperheroes = paginaFormularioSuperheroes;

var paginaPersonajes = function paginaPersonajes(req, res) {
  res.render("personajes");
};

exports.paginaPersonajes = paginaPersonajes;