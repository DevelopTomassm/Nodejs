const { Schema, model } = require('mongoose');

const rutinaSchema = new Schema({
    nombre: String,
    descripcion: String,

})

module.exports = model('Rutina', rutinaSchema);