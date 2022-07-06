import 'package:frontend/models/rutina.model.dart';
import 'package:frontend/petitions/rutina.petition.dart';
import 'package:flutter/material.dart';
import 'package:frontend/layouts/text_box.dart';

class ModifyRutina extends StatefulWidget {
  final Rutina rutina;
  ModifyRutina(this.rutina);
  @override
  State<StatefulWidget> createState() => _ModifyRutina();
}

class _ModifyRutina extends State<ModifyRutina> {
  late TextEditingController controllerName;
  late TextEditingController controllerDescripcion;
  late String id;

  @override
  void initState() {
    Rutina ru = widget.rutina;
    controllerName = new TextEditingController(text: ru.name);
    controllerDescripcion = new TextEditingController(text: ru.descripcion);
    id = ru.id;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Modificar rutina"),
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
                      new Rutina(name: name, descripcion: descripcion, id: id);

                  modifyRutina(ru).then((rutina) {
                    if (rutina.id != '') {
                      print('Rutina modificada!');
                      Navigator.pop(context, rutina);
                    }
                  });
                }
              },
              child: Text("Actualizar rutina")),
        ],
      ),
    );
  }
}
