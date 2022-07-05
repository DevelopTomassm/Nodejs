import { Schema,model } from "mongoose";
const superheroeSchema=new Schema({
    
    alias:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    is:{
        type:String,
        required:true
    },
    origen:{
        type:String,
        required:true
    },
    afilicacion:{
        type:String,
        required:true
    },
    inteligencia:{
        type:Number,
        required:true
    },
    fuerza:{
        type:Number,
        required:true
    },
    velocidad:{
        type:Number,
        required:true
    },
    resistencia:{
        type:Number,
        required:true
    },
    proyeccionDeEnergia:{
        type:Number,
        required:true
    },
    habilidadLucha:{
        type:Number,
        required:true
    },
    raza:{
        type:String,
        required:true
    }
   
});
export default model('Superheroe',superheroeSchema);