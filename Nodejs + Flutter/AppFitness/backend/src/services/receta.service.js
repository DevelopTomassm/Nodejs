const recetamodel = require('../models/receta.model');

class RecetaService {
    RecetaService() {}

    async saveReceta(receta = new recetamodel()) {
        try {
            var recetaSave;
            await recetamodel.create(receta).then((value) => {
                recetaSave = value;
            });

            return recetaSave;

        } catch (error) {
            console.log(error);

        }
    }

    async getRecetas() {
        try {

            return await recetamodel.find();
        } catch (error) {
            return error;

        }
    }


    async deleteReceta(idc) {
        console.log(idc);
        var recetaDelete;
        try {
            await recetamodel.findOneAndRemove({
                _id: idc
            }).then((value) => {
                console.log(value);
                recetaDelete = value;
            });

            return recetaDelete;
        } catch (error) {
            console.log(error);

        }
    }

    async editReceta(recetaMod) {

        var recetaEdit;
        try {
            await recetamodel.findOneAndUpdate({
                _id: recetaMod._id
            }, recetaMod).then((value) => {

                recetaEdit = recetaMod;
            });

            return recetaEdit;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new RecetaService();