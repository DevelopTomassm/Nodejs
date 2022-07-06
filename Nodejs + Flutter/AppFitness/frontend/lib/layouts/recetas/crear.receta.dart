import 'package:frontend/models/receta.model.dart';
import 'package:frontend/layouts/text_box.dart';
import 'package:frontend/petitions/receta.petition.dart';
import 'package:flutter/material.dart';

class RegisterReceta extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _RegisterReceta();
}

class _RegisterReceta extends State<RegisterReceta> {
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
          title: Text("Crear receta"),
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
                    Receta r = new Receta(name: name, descripcion: descripcion);
                    addReceta(r).then((receta) {
                      if (receta.id != '') {
                        print('Receta creada!');
                        Navigator.pop(context, receta);
                      }
                    });
                  }
                },
                child: Text("Crear receta")),
          ],
        ));
  }
}
