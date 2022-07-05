import Usuario from "../models/Usuario";
import Escenario from "../models/Escenario";
import Superheroe from "../models/Superheroe";
export const renderDefault = async (req, res) => {
  try {
    const taskUser = await Usuario.find().lean();
    res.render("index", {
      taskUser,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};
export const renderInicio = async (req, res) => {
  try {
    const taskInicio = await Usuario.find().lean();
    res.render("inicio", {
      taskInicio,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};
export const renderUsuarios = async (req, res) => {
  try {
    const taskUser = await Usuario.find().lean();
    res.render("formUser", {
      taskUser,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};
export const renderEscenarios = async (req, res) => {
  try {
    const taskEscenario = await Escenario.find().lean();
    res.render("formEscenario", {
      taskEscenario,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};
export const renderSuperheroes = async (req, res) => {
  try {
    const taskSuperheroe = await Superheroe.find().lean();
    res.render("formSuperheroe", {
      taskSuperheroe,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

export const anadirUsuario = async (req, res, next) => {
  const usuario = Usuario(req.body);
  const usuarioGuardado = await usuario.save();
  console.log(usuario);
  res.send("saved");
};
export const anadirEscenario = async (req, res, next) => {
  const escenario = Escenario(req.body);
  const escenarioGuardado = await escenario.save();
  console.log(escenario);
  res.send("saved");
};
export const anadirSuperheroe = async (req, res, next) => {
  const superheroe = Superheroe(req.body);
  const superheroeGuardado = await superheroe.save();
  console.log(superheroe);
  res.send("saved");
};
export const paginaInicioPrincipal = (req, res) => {
  res.render("inicio");
};
export const paginaInicio = (req, res) => {
  res.render("index");
};
export const paginaFormularioUsuarios = (req, res) => {
  res.render("formUser");
};
export const paginaFormularioEscenarios = (req, res) => {
  res.render("formEscenario");
};
export const paginaFormularioSuperheroes = (req, res) => {
  res.render("formSuperheroe");
};
export const paginaPersonajes = (req, res) => {
  res.render("personajes");
};
