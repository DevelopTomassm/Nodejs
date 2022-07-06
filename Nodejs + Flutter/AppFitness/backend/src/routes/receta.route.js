const { Router } = require('express');
const { addReceta, getRecetas, editReceta, deleteReceta } = require('../controllers/receta.controller');
const router = Router();
const Receta = require('../models/receta.model')
const { isAuthenticated } = require('../helpers/auth')
    //flutter post
router.get('/api/recetas', getRecetas);
router.post('/api/recetas/create', addReceta);
router.put('/api/recetas/edit', editReceta);
router.delete('/api/recetas/delete/:id', deleteReceta);

//Web

router.get('/recetas/add', isAuthenticated, (req, res) => {
    res.render('recetas/new-receta');
})
router.post('/recetas/new-receta', isAuthenticated, async(req, res) => {
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
        res.render('recetas/new-receta', {
            errors,
            nombre,
            descripcion
        });
    } else {
        const newReceta = new Receta({ nombre, descripcion })
        await newReceta.save();
        req.flash('success_msg', 'Receta agregada correctamente')
        res.redirect('/recetas')

    }

})
router.get('/recetas', isAuthenticated, async(req, res) => {
    const recetas = await Receta.find({ receta: req.params.id }).
    lean().sort({ date: 'desc' })
    res.render('recetas/all-recetas', { recetas });
});
router.get('/recetas/edit/:id', isAuthenticated, async(req, res) => {
    const receta = await Receta.findById(req.params.id).lean()
    res.render('recetas/edit-receta', { receta });
});
router.put('/recetas/edit-receta/:id', isAuthenticated, async(req, res) => {
    const { nombre, descripcion } = req.body;
    await Receta.findByIdAndUpdate(req.params.id, { nombre, descripcion })
        .lean();
    req.flash('success_msg', 'Receta actualizada correctamente')
    res.redirect('/recetas');
})
router.delete('/recetas/delete/:id', isAuthenticated, async(req, res) => {
    await Receta.findByIdAndDelete(req.params.id).lean()
    req.flash('success_msg', 'Receta eliminada correctamente')

    res.redirect('/recetas')
})





module.exports = router;