import { Schema,model } from "mongoose";
const escenarioSchema=new Schema({
    nombreEscenario:{
        type:String,
        required:true,
        trim:true
    },
    ubicacion:{
        type:String,
        required:true,
        trim:true
    },
    energiaVital:{
        type:Number,
        required:true,
        trim:true
    },
    numeroSuperheroes:{
        type:Number,
        required:true,
        trim:true
    },
    numeroMovimientos:{
        type:Number,
        required:true,
        trim:true
    },
    monedas:{
        type:Number,
        required:true,
        trim:true
    },
   
});
export default model('Escenario',escenarioSchema);