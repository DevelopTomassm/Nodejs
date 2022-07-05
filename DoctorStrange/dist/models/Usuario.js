"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var usuarioSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellidos: {
    type: String,
    required: true,
    trim: true
  },
  edad: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  contrasena: {
    type: String,
    required: true,
    trim: true
  },
  pais: {
    type: String,
    required: true,
    trim: true
  },
  localidad: {
    type: String,
    required: true,
    trim: true
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  sexo: {
    type: String,
    required: true,
    trim: true
  },
  ntarjeta: {
    type: String,
    required: true,
    trim: true
  },
  cvv: {
    type: String,
    required: true,
    trim: true
  },
  fechacad: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)("Usuario", usuarioSchema);

exports["default"] = _default;