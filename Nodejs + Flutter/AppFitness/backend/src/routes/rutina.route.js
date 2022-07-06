const { Router } = require('express');
const { addRutina, getRutinas, editRutina, deleteRutina } = require('../controllers/rutina.controller');
const router = Router();
const Rutina = require('../models/rutina.model')
const { isAuthenticated } = require('../helpers/auth')
router.get('/api/rutinas', getRutinas);
router.post('/api/rutinas/create', addRutina);
router.put('/api/rutinas/edit', editRutina);
router.delete('/api/rutinas/delete/:id', deleteRutina);


router.get('/rutinas/add', isAuthenticated, (req, res) => {
    res.render('rutinas/new-rutina');
})
router.post('/rutinas/new-rutina', isAuthenticated, async(req, res) => {
    const { nombre, descripcion } = req.body
    const errors = [];
    if (!nombre) {
        errors.push({
            text: 'Porfavor escribe un titulo'
        })
    }
    if (!descripcion) {
        errors.push({
            text: 'Porfavor escribe una descripcion'
        })
    }
    if (errors.length > 0) {
        res.render('rutinas/new-rutina', {
            errors,
            nombre,
            descripcion
        });
    } else {
        const newRutina = new Rutina({ nombre, descripcion })
        await newRutina.save();
        req.flash('success_msg', 'Rutina agregada correctamente')
        res.redirect('/rutinas')

    }

})
router.get('/rutinas', isAuthenticated, async(req, res) => {
    const rutinas = await Rutina.find({ rutina: req.params.id })
        .lean().sort({ date: 'desc' })
    res.render('rutinas/all-rutinas', { rutinas });
});
router.get('/rutinas/edit/:id', isAuthenticated, async(req, res) => {
    const rutina = await Rutina.findById(req.params.id).lean()
    res.render('rutinas/edit-rutina', { rutina });
});
router.put('/rutinas/edit-rutina/:id', isAuthenticated, async(req, res) => {
    const { nombre, descripcion } = req.body;
    await Rutina.findByIdAndUpdate(req.params.id, { nombre, descripcion })
        .lean();
    req.flash('success_msg', 'Rutina actualizada correctamente')
    res.redirect('/rutinas');
})
router.delete('/rutinas/delete/:id', isAuthenticated, async(req, res) => {
    await Rutina.findByIdAndDelete(req.params.id).lean()
    req.flash('success_msg', 'Rutina eliminada correctamente')

    res.redirect('/rutinas')
})


module.exports = router;