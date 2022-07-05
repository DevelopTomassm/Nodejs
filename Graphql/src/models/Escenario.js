import { Schema,model } from "mongoose";
const escenarioSchema=new Schema({
    nombreEscenario:{
        type:String,
        required:true
    },
    ubicacion:{
        type:String,
        required:true
    },
    energiaVital:{
        type:Number,
        required:true
    },
    numeroSuperheroes:{
        type:Number,
        required:true
    },
    numeroMovimientos:{
        type:Number,
        required:true
    },
    monedas:{
        type:Number,
        required:true
    },
   
});
export default model('Escenario',escenarioSchema);