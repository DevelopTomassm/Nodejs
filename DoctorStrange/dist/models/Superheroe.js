"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var superheroeSchema = new _mongoose.Schema({
  alias: {
    type: String,
    required: true,
    trim: true
  },
  id: {
    type: Number,
    required: true,
    trim: true
  },
  is: {
    type: String,
    required: true,
    trim: true
  },
  origen: {
    type: String,
    required: true,
    trim: true
  },
  afilicacion: {
    type: String,
    required: true,
    trim: true
  },
  inteligencia: {
    type: Number,
    required: true,
    trim: true
  },
  fuerza: {
    type: Number,
    required: true,
    trim: true
  },
  velocidad: {
    type: Number,
    required: true,
    trim: true
  },
  resistencia: {
    type: Number,
    required: true,
    trim: true
  },
  proyeccionDeEnergia: {
    type: Number,
    required: true,
    trim: true
  },
  habilidadLucha: {
    type: Number,
    required: true,
    trim: true
  },
  raza: {
    type: String,
    required: true,
    trim: true
  }
});

var _default = (0, _mongoose.model)('Superheroe', superheroeSchema);

exports["default"] = _default;