import 'dart:convert';
import 'package:frontend/models/user.model.dart';
//import 'package:frontend/models/receta.model.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;

Future<List<User>> listUser() async {
  final response = await http
      .get(Uri.parse('http://fitness-app-tfg.herokuapp.com/api/users'));
  print(response.body);

  return compute(goToList, response.body);
}

List<User> goToList(String responseBody) {
  final pasar = json.decode(responseBody);

  return pasar['users'].map<User>((json) => User.fromJson(json)).toList();
}

mapUser(User user, bool mapId) {
  Map data;
  if (mapId) {
    data = {
      '_id': '${user.id}',
      'nombre': '${user.name}',
      'email': '${user.email}',
      'password': '${user.password}',
    };
  } else {
    data = {
      'nombre': '${user.name}',
      'email': '${user.email}',
      'password': '${user.password}',
    };
  }

  return data;
}

Future<User> addUser(User user) async {
  var url = Uri.parse('http://fitness-app-tfg.herokuapp.com/api/users/signup');

  var body = json.encode(mapUser(user, false));

  var response = await http.post(url,
      headers: {'Content-Type': 'application/json; charset=UTF-8'}, body: body);
  print("${response}");

  if (response.statusCode == 200) {
    return User.fromJson(jsonDecode(response.body)['user']);
  } else {
    throw Exception('Failed to load user');
  }
}

Future<User> deleteUser(String userId) async {
  print(userId);
  final http.Response response = await http.delete(
    Uri.parse('http://fitness-app-tfg.herokuapp.com/api/users/delete/$userId'),
    headers: <String, String>{
      'Content-Type': 'application/json; charset=UTF-8',
    },
  );

  if (response.statusCode == 200) {
    return User.fromJson(jsonDecode(response.body)['user']);
  } else {
    print(response.statusCode);
    throw Exception('Failed to Delete user');
  }
}

Future<User> modifyUser(User user) async {
  var url = Uri.parse('http://fitness-app-tfg.herokuapp.com/api/users/edit');

  var body = json.encode(mapUser(user, true));
  print(body);

  var response = await http.put(url,
      headers: {"Content-Type": "application/json"}, body: body);
  if (response.statusCode == 200) {
    return User.fromJson(jsonDecode(response.body)['user']);
  } else {
    print(response.statusCode);
    throw Exception('Failed to modify user');
  }
}
