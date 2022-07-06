import 'dart:convert';
import 'package:frontend/models/receta.model.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

Future<List<Receta>> listReceta() async {
  final response = await http
      .get(Uri.parse('http://fitness-app-tfg.herokuapp.com/api/recetas'));
  print(response.body);

  return compute(goToList, response.body);
}

List<Receta> goToList(String responseBody) {
  final pasar = json.decode(responseBody);

  return pasar['recetas'].map<Receta>((json) => Receta.fromJson(json)).toList();
}

mapReceta(Receta receta, bool mapId) {
  Map data;
  if (mapId) {
    data = {
      '_id': '${receta.id}',
      'nombre': '${receta.name}',
      'descripcion': '${receta.descripcion}',
    };
  } else {
    data = {
      'nombre': '${receta.name}',
      'descripcion': '${receta.descripcion}',
    };
  }

  return data;
}

Future<Receta> addReceta(Receta receta) async {
  var url =
      Uri.parse('http://fitness-app-tfg.herokuapp.com/api/recetas/create');

  var body = json.encode(mapReceta(receta, false));

  var response = await http.post(url,
      headers: {'Content-Type': 'application/json; charset=UTF-8'}, body: body);
  print("${response}");

  if (response.statusCode == 200) {
    return Receta.fromJson(jsonDecode(response.body)['receta']);
  } else {
    throw Exception('Failed to load receta');
  }
}

Future<Receta> deleteReceta(String userId) async {
  print(userId);
  final http.Response response = await http.delete(
    Uri.parse(
        'http://fitness-app-tfg.herokuapp.com/api/recetas/delete/$userId'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );

  if (response.statusCode == 200) {
    return Receta.fromJson(jsonDecode(response.body)['receta']);
  } else {
    print(response.statusCode);
    throw Exception('Failed to Delete receta');
  }
}

Future<Receta> modifyReceta(Receta receta) async {
  var url = Uri.parse('http://fitness-app-tfg.herokuapp.com/api/recetas/edit');

  var body = json.encode(mapReceta(receta, true));
  print(body);

  var response = await http.put(url,
      headers: {"Content-Type": "application/json"}, body: body);
  if (response.statusCode == 200) {
    return Receta.fromJson(jsonDecode(response.body)['receta']);
  } else {
    print(response.statusCode);
    throw Exception('Failed to modify receta');
  }
}
