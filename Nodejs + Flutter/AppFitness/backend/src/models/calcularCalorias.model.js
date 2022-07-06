const mongoose = require('mongoose');
const { Schema } = mongoose;

const CaloriasSchema = new Schema({
    sexo: String,
    edad: String,
    peso: String,
    altura: String,
    actividad: String,
    TMB: String,
    caloriasDeMantenimiento: String,
    caloriasDeDefinicion: String,
    caloriasDeVolumen: String,
    date: {
        type: Date,
        default: Date.now
    },
    user: String


});
module.exports = mongoose.model('Calorias', CaloriasSchema)