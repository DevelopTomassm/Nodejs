const usermodel = require('../models/user.model');
const recetamodel = require('../models/receta.model');

class UserService {
    UserService() {}

    async guardaruser(user = new usermodel()) {
        try {
            var userGuardado;
            await usermodel.create(user).then((value) => {
                userGuardado = value;
            });

            return userGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarusers() {
        try {

            return await usermodel.find();
        } catch (error) {
            return error;

        }
    }


    async eliminaruser(idc) {
        console.log(idc);
        var userEliminado;
        try {
            await usermodel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                console.log(value);
                userEliminado = value;
            });

            return userEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificaruser(usermod) {

        var userModificado;
        try {
            await usermodel.findOneAndUpdate({
                _id: usermod._id
            }, usermod).then((value) => {

                userModificado = usermod;
            });

            return userModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new UserService();