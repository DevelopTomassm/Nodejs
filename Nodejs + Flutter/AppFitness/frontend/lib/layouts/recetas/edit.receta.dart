import 'package:frontend/models/receta.model.dart';
import 'package:frontend/petitions/receta.petition.dart';
import 'package:flutter/material.dart';
import 'package:frontend/layouts/text_box.dart';

class ModifyReceta extends StatefulWidget {
  final Receta receta;
  ModifyReceta(this.receta);
  @override
  State<StatefulWidget> createState() => _ModifyReceta();
}

class _ModifyReceta extends State<ModifyReceta> {
  late TextEditingController controllerName;
  late TextEditingController controllerDescripcion;
  late String id;
  @override
  void initState() {
    Receta r = widget.receta;
    controllerName = new TextEditingController(text: r.name);
    controllerDescripcion = new TextEditingController(text: r.descripcion);
    id = r.id;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Modificar receta"),
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
                  Receta r =
                      new Receta(name: name, descripcion: descripcion, id: id);
                  modifyReceta(r).then((receta) {
                    if (receta.id != '') {
                      print('Receta modificada!');
                      Navigator.pop(context, receta);
                    }
                  });
                }
              },
              child: Text("Actualizar receta")),
        ],
      ),
    );
  }
}
