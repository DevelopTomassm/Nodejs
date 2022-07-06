const recetaService = require('../services/receta.service');

const addReceta = async(req, res) => {
    console.log(req.body);
    res.json({
        receta: await recetaService.saveReceta(req.body)

    })

}
const getRecetas = async(req, res) => {
    res.json({
        recetas: await recetaService.getRecetas()
    })
}

const editReceta = async(req, res) => {
    res.json({
        receta: await recetaService.editReceta(req.body)
    })
}

const deleteReceta = async(req, res) => {
    res.json({
        receta: await recetaService.deleteReceta(req.params.id)
    })
}



module.exports = { addReceta, getRecetas, editReceta, deleteReceta };