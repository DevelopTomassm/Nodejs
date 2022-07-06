const userService = require('../services/user.service');

const agregarusers = async(req, res) => {
    console.log(req.body);
    res.json({
        user: await userService.guardaruser(req.body)

    })

}
const consultarusers = async(req, res) => {
    res.json({
        users: await userService.consultarusers()
    })
}

const modificarusers = async(req, res) => {
    res.json({
        user: await userService.modificaruser(req.body)
    })
}

const eliminarusers = async(req, res) => {
    res.json({
        user: await userService.eliminaruser(req.params.id)
    })
}



module.exports = { consultarusers, agregarusers, modificarusers, eliminarusers };