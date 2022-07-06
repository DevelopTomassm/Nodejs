const { Schema, model } = require('mongoose');

const recetaSchema = new Schema({
    nombre: String,
    descripcion: String,


})

module.exports = model('Receta', recetaSchema);