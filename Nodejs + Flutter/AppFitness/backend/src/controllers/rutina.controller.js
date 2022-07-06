const rutinaService = require('../services/rutina.service');

const addRutina = async(req, res) => {
    console.log(req.body);
    res.json({
        rutina: await rutinaService.saveRutina(req.body)

    })

}
const getRutinas = async(req, res) => {
    res.json({
        rutinas: await rutinaService.getRutinas()
    })
}

const editRutina = async(req, res) => {
    res.json({
        rutina: await rutinaService.editRutina(req.body)
    })
}

const deleteRutina = async(req, res) => {
    res.json({
        rutina: await rutinaService.deleteRutina(req.params.id)
    })
}



module.exports = { addRutina, getRutinas, editRutina, deleteRutina };