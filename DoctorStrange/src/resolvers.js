
import Escenario from "./models/Escenario";
import Superheroe from "./models/Superheroe";
export const resolvers={




    Query:{
       async superheroes(){
           const superheroes= await Superheroe.find();
           return superheroes
        },
        async escenarios(){
          const escenarios= await Escenario.find();
          return escenarios
       }
    },
    Mutation:{
      async createSuperheroe(_,{input}){
             const newSuperheroe=new Superheroe(input)
            await newSuperheroe.save();
            return newSuperheroe

        },
     async  deleteSuperheroe(_,{_id}){
          const superheroeDelete= await Superheroe.findById(_id)
          return superheroeDelete

        },
        async updateSuperheroe(_,{_id,input}){
          return await Superheroe.findByIdAndUpdate(_id,input,{new:true});
        
        },
        async createEscenario(_,{input}){
          const newEscenario=new Escenario(input)
         await newEscenario.save();
         return newEscenario

     },
  async  deleteEscenario(_,{_id}){
       const escenarioDelete= await Escenario.findById(_id)
       return escenarioDelete

     },
     async updateEscenario(_,{_id,input}){
       const escenarioUpdate= await Escenario.findById(_id,input,{new:true});
       return escenarioUpdate
     }

    }

};