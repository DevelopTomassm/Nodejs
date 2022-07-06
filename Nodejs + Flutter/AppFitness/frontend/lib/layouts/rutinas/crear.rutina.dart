import 'package:frontend/models/rutina.model.dart';
import 'package:frontend/layouts/text_box.dart';
import 'package:frontend/petitions/rutina.petition.dart';
import 'package:flutter/material.dart';

class RegisterRutina extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _RegisterRutina();
}

class _RegisterRutina extends State<RegisterRutina> {
  late TextEditingController controllerName;
  late TextEditingController controllerDescripcion;

  @override
  void initState() {
    controllerName = new TextEditingController();
    controllerDescripcion = new TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Crear rutina"),
        ),
        body: ListView(
          children: [
            TextBox(controllerName, "Nombre"),
            TextBox(controllerDescripcion, "Descripcion"),
            ElevatedButton(
                onPressed: () {
                  String name = controllerName.text;
                  String descripcion = controllerDescripcion.text;

                  if (name.isNotEmpty && descripcion.isNotEmpty) {
                    Rutina ru =
                        new Rutina(name: name, descripcion: descripcion);

                    addRutina(ru).then((receta) {
                      if (receta.id != '') {
                        print('Rutina creada!');
                        Navigator.pop(context, receta);
                      }
                    });
                  }
                },
                child: Text("Crear rutina")),
          ],
        ));
  }
}
