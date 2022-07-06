import 'dart:convert';
import 'package:frontend/models/rutina.model.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

Future<List<Rutina>> listRutina() async {
  final response = await http
      .get(Uri.parse('http://fitness-app-tfg.herokuapp.com/api/rutinas'));
  print(response.body);

  return compute(goToList, response.body);
}

List<Rutina> goToList(String responseBody) {
  final pasar = json.decode(responseBody);

  return pasar['rutinas'].map<Rutina>((json) => Rutina.fromJson(json)).toList();
}

mapRutina(Rutina rutina, bool mapId) {
  Map data;
  if (mapId) {
    data = {
      '_id': '${rutina.id}',
      'nombre': '${rutina.name}',
      'descripcion': '${rutina.descripcion}',
    };
  } else {
    data = {
      'nombre': '${rutina.name}',
      'descripcion': '${rutina.descripcion}',
    };
  }

  return data;
}

Future<Rutina> addRutina(Rutina rutina) async {
  var url =
      Uri.parse('http://fitness-app-tfg.herokuapp.com/api/rutinas/create');

  var body = json.encode(mapRutina(rutina, false));

  var response = await http.post(url,
      headers: {'Content-Type': 'application/json; charset=UTF-8'}, body: body);
  print("${response}");

  if (response.statusCode == 200) {
    return Rutina.fromJson(jsonDecode(response.body)['rutina']);
  } else {
    throw Exception('Failed to load rutina');
  }
}

Future<Rutina> deleteRutina(String userId) async {
  print(userId);
  final http.Response response = await http.delete(
    Uri.parse(
        'http://fitness-app-tfg.herokuapp.com/api/rutinas/delete/$userId'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );

  if (response.statusCode == 200) {
    return Rutina.fromJson(jsonDecode(response.body)['rutina']);
  } else {
    print(response.statusCode);
    throw Exception('Failed to Delete rutina');
  }
}

Future<Rutina> modifyRutina(Rutina rutina) async {
  var url = Uri.parse('http://fitness-app-tfg.herokuapp.com/api/rutinas/edit');

  var body = json.encode(mapRutina(rutina, true));
  print(body);

  var response = await http.put(url,
      headers: {"Content-Type": "application/json"}, body: body);
  if (response.statusCode == 200) {
    return Rutina.fromJson(jsonDecode(response.body)['rutina']);
  } else {
    print(response.statusCode);
    throw Exception('Failed to modify rutina');
  }
}
