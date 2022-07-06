const rutinamodel = require('../models/rutina.model');

class RutinaService {
    RutinaService() {}

    async saveRutina(rutina = new rutinamodel()) {
        try {
            var rutinaSave;
            await rutinamodel.create(rutina).then((value) => {
                rutinaSave = value;
            });

            return rutinaSave;

        } catch (error) {
            console.log(error);

        }
    }

    async getRutinas() {
        try {

            return await rutinamodel.find();
        } catch (error) {
            return error;

        }
    }


    async deleteRutina(idc) {
        console.log(idc);
        var rutinaDelete;
        try {
            await rutinamodel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                console.log(value);
                rutinaDelete = value;
            });

            return rutinaDelete;
        } catch (error) {
            console.log(error);

        }
    }

    async editRutina(rutinaMod) {

        var rutinaEdit;
        try {
            await rutinamodel.findOneAndUpdate({
                _id: rutinaMod._id
            }, rutinaMod).then((value) => {

                rutinaEdit = rutinaMod;
            });

            return rutinaEdit;
        } catch (error) {
            console.log(error);

        }
    }
}


module.exports = new RutinaService();