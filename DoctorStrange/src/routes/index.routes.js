import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import Usuario from "../models/Usuario";
import {paginaInicioPrincipal, anadirEscenario, anadirSuperheroe, anadirUsuario, paginaInicio, paginaFormularioEscenarios, paginaFormularioSuperheroes, paginaFormularioUsuarios, paginaPersonajes, renderDefault, renderEscenarios, renderSuperheroes, renderUsuarios, renderInicio } from "../controllers/usuario.controllers";
const router = Router();

//Renderizado de nuestras rutas
router.get("/", renderInicio);
router.get("/", renderDefault);
router.get("/", renderUsuarios);
router.get("/", renderEscenarios);
router.get("/", renderSuperheroes);
router.post("/Usuario/add", anadirUsuario);
router.post("/Escenario/add", anadirEscenario);
router.post("/Superheroe/add", anadirSuperheroe);
router.get("/inicio", paginaInicioPrincipal);
router.get("/index", paginaInicio);
router.get("/formUser", paginaFormularioUsuarios);
router.get("/formEscenario", paginaFormularioEscenarios);
router.get("/formSuperheroe", paginaFormularioSuperheroes);
router.get("/personajes", paginaPersonajes);


export default router;
