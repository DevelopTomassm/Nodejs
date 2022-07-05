
import  mongoose from "mongoose";
export async function conectada(){
    try {
        await  mongoose.connect('mongodb://tridenteeuropeo:tridenteeuropeo@cluster0-shard-00-00.rrxyb.mongodb.net:27017,cluster0-shard-00-01.rrxyb.mongodb.net:27017,cluster0-shard-00-02.rrxyb.mongodb.net:27017/DoctorStrangeFinalTuputamadre?ssl=true&replicaSet=atlas-114eso-shard-0&authSource=admin&retryWrites=true&w=majority',{
            useNewUrlParser:true
            }
            )
            console.log('>>> DB esta conectada'); 
            
    } catch (error) {
        console.log('No se ha podido conectar a la base de datos')
        console.log(er)
   
    }
  
}

