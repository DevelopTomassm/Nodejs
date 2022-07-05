"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var escenarioSchema = new _mongoose.Schema({
  nombreEscenario: {
    type: String,
    required: true,
    trim: true
  },
  ubicacion: {
    type: String,
    required: true,
    trim: true
  },
  energiaVital: {
    type: Number,
    required: true,
    trim: true
  },
  numeroSuperheroes: {
    type: Number,
    required: true,
    trim: true
  },
  numeroMovimientos: {
    type: Number,
    required: true,
    trim: true
  },
  monedas: {
    type: Number,
    required: true,
    trim: true
  }
});

var _default = (0, _mongoose.model)('Escenario', escenarioSchema);

exports["default"] = _default;