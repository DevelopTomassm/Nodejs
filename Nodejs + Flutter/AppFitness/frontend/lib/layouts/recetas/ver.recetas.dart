import 'package:frontend/drawer_menu.dart';
import 'package:frontend/layouts/recetas/edit.receta.dart';
import 'package:frontend/models/receta.model.dart';
import 'package:frontend/layouts/message_response.dart';
import 'package:frontend/layouts/recetas/crear.receta.dart';
import 'package:frontend/petitions/receta.petition.dart';
import 'package:flutter/material.dart';

class MyRecetaPage extends StatefulWidget {
  static const String routeName = '/recetas';
  final String _title;
  MyRecetaPage(this._title);
  @override
  State<StatefulWidget> createState() => _MyRecetaPage();
}

class _MyRecetaPage extends State<MyRecetaPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Recetas'),
      ),
      drawer: DrawerMenu(),
      body: getRecetas(context, listReceta()),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
                  context, MaterialPageRoute(builder: (_) => RegisterReceta()))
              .then((newContact) {
            setState(() {
              messageResponse(
                  context, newContact.name + " a sido guardado...!");
            });
          });
        },
        tooltip: "Agregar receta",
        child: Icon(Icons.add),
      ),
    );
  }

  Widget getRecetas(BuildContext context, Future<List<Receta>> futurereceta) {
    return FutureBuilder(
      future: futurereceta,
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        switch (snapshot.connectionState) {
          //En este case estamos a la espera de la respuesta, mientras tanto mostraremos el cargando...
          case ConnectionState.waiting:
            return Center(child: CircularProgressIndicator());

          case ConnectionState.done:
            if (snapshot.hasError)
              return Container(
                alignment: Alignment.center,
                child: Center(
                  child: Text('Error: ${snapshot.error}'),
                ),
              );
            // print(snapshot.data);
            return snapshot.data != null
                ? recetalist(snapshot.data)
                : Container(
                    alignment: Alignment.center,
                    child: Center(
                      child: Text('Sin Datos'),
                    ),
                  );
          default:
            return Text('Recarga la pantalla....!');
        }
      },
    );
  }

  Widget recetalist(List<Receta> recetas) {
    return ListView.builder(
      itemCount: recetas.length,
      itemBuilder: (context, index) {
        return ListTile(
          onTap: () {
            Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (_) => ModifyReceta(recetas[index])))
                .then((newContact) {
              setState(() {
                messageResponse(
                    context, newContact.name + " a sido modificado...!");
              });
            });
          },
          onLongPress: () {
            removeReceta(context, recetas[index]);
          },
          title: Text(recetas[index].name),
          subtitle: Text(recetas[index].descripcion),
          leading: CircleAvatar(
            child: Text(recetas[index].name.substring(0, 1)),
          ),
          trailing: Icon(
            Icons.edit_note,
            color: Color.fromARGB(255, 215, 23, 23),
          ),
        );
      },
    );
  }

  removeReceta(BuildContext context, Receta receta) {
    showDialog(
        context: context,
        builder: (_) => AlertDialog(
              title: Text("Eliminar receta"),
              content: Text(
                  "Esta seguro de eliminar la receta: " + receta.name + "?"),
              actions: [
                TextButton(
                  onPressed: () {
                    setState(() {
                      deleteReceta(receta.id).then((receta) {
                        if (receta.id != '') {
                          setState(() {});
                        }
                      });
                      Navigator.pop(context);
                    });
                  },
                  child: Text(
                    "Eliminar",
                    style: TextStyle(color: Colors.red),
                  ),
                ),
                TextButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  child: Text(
                    "Cancelar",
                    style: TextStyle(color: Colors.blue),
                  ),
                )
              ],
            ));
  }
}
