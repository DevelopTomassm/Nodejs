import Realm from "realm";
import schema from "../schema";
 const superheroes= {
  "title": "superhero",
  "properties": {
    "__v": {
      "bsonType": "int"
    },
    "_id": {
      "bsonType": "objectId"
    },
    "afilicacion": {
      "bsonType": "string"
    },
    "alias": {
      "bsonType": "string"
    },
    "fuerza": {
      "bsonType": "int"
    },
    "habilidadLucha": {
      "bsonType": "int"
    },
    "id": {
      "bsonType": "int"
    },
    "inteligencia": {
      "bsonType": "int"
    },
    "is": {
      "bsonType": "string"
    },
    "origen": {
      "bsonType": "string"
    },
    "proyeccionDeEnergia": {
      "bsonType": "int"
    },
    "raza": {
      "bsonType": "string"
    },
    "resistencia": {
      "bsonType": "int"
    },
    "velocidad": {
      "bsonType": "int"
    },
    "particion_prueba": {
        "bsonType": "objectId"
      }
    },
    "required": [
      "particion_prueba"
    ] 
}
const escenarios={
  "title": "escenario",
  "properties": {
    "__v": {
      "bsonType": "int"
    },
    "_id": {
      "bsonType": "objectId"
    },
    "energiaVital": {
      "bsonType": "int"
    },
    "monedas": {
      "bsonType": "int"
    },
    "nombreEscenario": {
      "bsonType": "string"
    },
    "numeroMovimientos": {
      "bsonType": "int"
    },
    "numeroSuperheroes": {
      "bsonType": "int"
    },
    "ubicacion": {
      "bsonType": "string"
    },
    "particion_prueba": {
        "bsonType": "objectId"
      }
    },
    "required": [
      "particion_prueba"
    ] 
}
 const realm= await Realm.open({
    path:"myrealm",
    schema:[superheroes]
});
const realm=new Realm();
realm.objects('superheroes')
console.log(realm)

