import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
import gql from'graphql-tag'
//Lo que se puede consultar en la consulta
const typeDefs =gql `
type Query{
    superheroes:[Superheroe]
    escenarios:[Escenario]
}
type Superheroe{
    _id:ID
    alias:String!
            id:Int!
            is:String!
            origen:String!
            afilicacion:String!
            inteligencia:Int!
            fuerza:Int!
            velocidad:Int!
            resistencia:Int!
            proyeccionDeEnergia:Int!
            habilidadLucha:Int!
            raza:String!
}
type Escenario{
    _id:ID
        nombreEscenario:String!
        ubicacion:String!
        energiaVital:Int!
        numeroSuperheroes:Int!
        numeroMovimientos:Int!
        monedas:Int!
    } 
    input EscenarioInput{
            nombreEscenario:String!
            ubicacion:String!
            energiaVital:Int!
            numeroSuperheroes:Int!
            numeroMovimientos:Int!
            monedas:Int!
        } 
        input SuperheroeInput{
            alias:String!
            id:Int!
            is:String!
            origen:String!
            afilicacion:String!
            inteligencia:Int!
            fuerza:Int!
            velocidad:Int!
            resistencia:Int!
            proyeccionDeEnergia:Int!
            habilidadLucha:Int!
            raza:String!
        }

type Mutation{
    createSuperheroe(input: SuperheroeInput): Superheroe
    deleteSuperheroe(_id:ID):Superheroe
    updateSuperheroe(_id:ID,input:SuperheroeInput):Superheroe
    createEscenario(input: EscenarioInput): Escenario
    deleteEscenario(_id:ID):Escenario
    updateEscenario(_id:ID,input:EscenarioInput):Escenario
}

`;
export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
})