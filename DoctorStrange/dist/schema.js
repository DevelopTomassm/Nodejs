"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _graphqlTools = require("graphql-tools");

var _resolvers = require("./resolvers");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _templateObject;

//Lo que se puede consultar en la consulta
var typeDefs = (0, _graphqlTag["default"])(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\ntype Query{\n    superheroes:[Superheroe]\n    escenarios:[Escenario]\n}\ntype Superheroe{\n    _id:ID\n    alias:String!\n            id:Int!\n            is:String!\n            origen:String!\n            afilicacion:String!\n            inteligencia:Int!\n            fuerza:Int!\n            velocidad:Int!\n            resistencia:Int!\n            proyeccionDeEnergia:Int!\n            habilidadLucha:Int!\n            raza:String!\n}\ntype Escenario{\n    _id:ID\n        nombreEscenario:String!\n        ubicacion:String!\n        energiaVital:Int!\n        numeroSuperheroes:Int!\n        numeroMovimientos:Int!\n        monedas:Int!\n    } \n    input EscenarioInput{\n            nombreEscenario:String!\n            ubicacion:String!\n            energiaVital:Int!\n            numeroSuperheroes:Int!\n            numeroMovimientos:Int!\n            monedas:Int!\n        } \n        input SuperheroeInput{\n            alias:String!\n            id:Int!\n            is:String!\n            origen:String!\n            afilicacion:String!\n            inteligencia:Int!\n            fuerza:Int!\n            velocidad:Int!\n            resistencia:Int!\n            proyeccionDeEnergia:Int!\n            habilidadLucha:Int!\n            raza:String!\n        }\n\ntype Mutation{\n    createSuperheroe(input: SuperheroeInput): Superheroe\n    deleteSuperheroe(_id:ID):Superheroe\n    updateSuperheroe(_id:ID,input:SuperheroeInput):Superheroe\n    createEscenario(input: EscenarioInput): Escenario\n    deleteEscenario(_id:ID):Escenario\n    updateEscenario(_id:ID,input:EscenarioInput):Escenario\n}\n\n"])));

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
});

exports["default"] = _default;