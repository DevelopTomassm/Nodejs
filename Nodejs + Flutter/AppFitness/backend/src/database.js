const mongoose = require('mongoose');
const dbConection = async() => {
    try {
        console.log('Conectando a la base de datos...');
        await mongoose.connect('mongodb+srv://Tomas:Tomas1234@cluster0.rjnow.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true
        });
        console.log('Base de datos conectada');

    } catch (error) {

        throw new Error(error);

    }
}

module.exports = {
    dbConection
};