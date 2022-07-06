const express = require('express')
const router = express.Router();
const Calorias = require('../models/calcularCalorias.model');
const { isAuthenticated } = require('../helpers/auth');

router.get('/calcularCalorias', isAuthenticated, async(req, res) => {
    const calorias = await Calorias.find({ calorias: req.params.id }).lean().sort({ date: 'desc' })
    res.render('calculadora/calcularCalorias', { calorias });
});
router.post('/calorias/obtener-calorias', isAuthenticated, async(req, res) => {
    const { peso, altura, edad } = req.body
    const { actividad } = req.body
    const { sexo } = req.body
    const errors = [];
    if (!req.body.sexo) {
        errors.push({
            text: 'Porfavor elige un sexo'
        })
    }
    if (!peso) {
        errors.push({
            text: 'Porfavor introduce tu peso'
        })
    }
    if (!altura) {
        errors.push({
            text: 'Porfavor introduce tu altura'
        })
    }
    if (!req.body.actividad) {
        errors.push({
            text: 'Porfavor introduce tu actividad diaria'
        })
    }
    if (!edad) {
        errors.push({
            text: 'Porfavor introduce tu edad'
        })
    }
    if (errors.length > 0) {
        res.render('calculadora/calcularCalorias', {
            errors,
            sexo,
            peso,
            altura,
            actividadD,
            edad
        });
    } else {
        if (sexo == 'female') {
            const TMB = Math.round((655 + (9.6 * peso) + (1.8 * altura) - (4.7 * edad)))
            const caloriasDeMantenimiento = Math.round(TMB * Number(actividad))
            const caloriasDeDefinicion = Math.round(TMB * Number(actividad)) - 500
            const caloriasDeVolumen = Math.round(TMB * Number(actividad)) + 500
            const newCaloriasD = new Calorias({ sexo, edad, peso, altura, actividad, TMB, caloriasDeMantenimiento, caloriasDeDefinicion, caloriasDeVolumen });
            newCaloriasD.user = req.user.id;
            await newCaloriasD.save();
            req.flash('success_msg_calorias', 'Calorias guardadas correctamente');
            res.redirect('/calcularCalorias')
        } else {
            const TMB = Math.round((66 + (13.7 * peso) + (5 * altura) - (6.8 * edad)))
            const caloriasDeMantenimiento = Math.round(TMB * Number(actividad))
            const caloriasDeDefinicion = Math.round(TMB * Number(actividad)) - 500
            const caloriasDeVolumen = Math.round(TMB * Number(actividad)) + 500
            const newCaloriasD = new Calorias({ sexo, edad, peso, altura, actividad, TMB, caloriasDeMantenimiento, caloriasDeDefinicion, caloriasDeVolumen });
            newCaloriasD.user = req.user.id;
            await newCaloriasD.save();
            req.flash('success_msg_calorias', 'Calorias guardadas correctamente');
            res.redirect('/miscalorias')
        }
    }
})
router.get('/miscalorias', isAuthenticated, async(req, res) => {
    const calorias = await Calorias.find({ user: req.user.id }).lean().sort({ date: 'desc' })
    res.render('calculadora/all-calorias', { calorias });
});

module.exports = router