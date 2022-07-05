"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _request = _interopRequireDefault(require("express/lib/request"));

var _response = _interopRequireDefault(require("express/lib/response"));

var _Usuario = _interopRequireDefault(require("../models/Usuario"));

var _usuario = require("../controllers/usuario.controllers");

var router = (0, _express.Router)(); //Renderizado de nuestras rutas

router.get("/", _usuario.renderInicio);
router.get("/", _usuario.renderDefault);
router.get("/", _usuario.renderUsuarios);
router.get("/", _usuario.renderEscenarios);
router.get("/", _usuario.renderSuperheroes);
router.post("/Usuario/add", _usuario.anadirUsuario);
router.post("/Escenario/add", _usuario.anadirEscenario);
router.post("/Superheroe/add", _usuario.anadirSuperheroe);
router.get("/inicio", _usuario.paginaInicioPrincipal);
router.get("/index", _usuario.paginaInicio);
router.get("/formUser", _usuario.paginaFormularioUsuarios);
router.get("/formEscenario", _usuario.paginaFormularioEscenarios);
router.get("/formSuperheroe", _usuario.paginaFormularioSuperheroes);
router.get("/personajes", _usuario.paginaPersonajes);
var _default = router;
exports["default"] = _default;