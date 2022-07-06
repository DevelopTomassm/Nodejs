import 'package:frontend/home.dart';
import 'package:frontend/layouts/recetas/crear.receta.dart';
import 'package:frontend/layouts/recetas/ver.recetas.dart';
import 'package:frontend/layouts/rutinas/crear.rutina.dart';
import 'package:frontend/layouts/rutinas/ver.rutinas.dart';
import 'package:flutter/material.dart';
import 'package:frontend/layouts/users/crear.user.dart';
import 'package:frontend/layouts/users/edit.user.dart';
import 'package:frontend/layouts/users/ver.users.dart';
import 'package:frontend/models/receta.model.dart';
import 'package:frontend/models/user.model.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  static const String home = Home.routeName;
  static const String perfil = MyUserPage.routeName;
  static const String recetas = MyRecetaPage.routeName;
  static const String rutinas = MyRutinaPage.routeName;
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ejemplo Drawer Menu',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      routes: {
        home: (context) => Home(),
        perfil: (context) => MyUserPage(''),
        recetas: (context) => MyRecetaPage(''),
        rutinas: (context) => MyRutinaPage(''),
      },
      home: Home(),
    );
  }
}
