const app = require('./app');
const { dbConection } = require('./database');
const port = process.env.PORT || 8080;
async function main() {
    //Primero nos conectamos a la base de datos
    await dbConection();
    //Despues inicio mi servidor 
    await app.listen(port);
}

main();