import 'package:frontend/drawer_menu.dart';
import 'package:frontend/layouts/rutinas/edit.rutina.dart';
import 'package:frontend/models/rutina.model.dart';
import 'package:frontend/layouts/message_response.dart';
import 'package:frontend/layouts/rutinas/crear.rutina.dart';
import 'package:frontend/petitions/rutina.petition.dart';
import 'package:flutter/material.dart';

class MyRutinaPage extends StatefulWidget {
  static const String routeName = '/rutinas';
  final String _title;
  MyRutinaPage(this._title);
  @override
  State<StatefulWidget> createState() => _MyRutinaPage();
}

class _MyRutinaPage extends State<MyRutinaPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Rutinas'),
      ),
      drawer: DrawerMenu(),
      body: getRutinas(context, listRutina()),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
                  context, MaterialPageRoute(builder: (_) => RegisterRutina()))
              .then((newContact) {
            setState(() {
              messageResponse(
                  context, newContact.name + " a sido guardado...!");
            });
          });
        },
        tooltip: "Agregar rutina",
        child: Icon(Icons.add),
      ),
    );
  }

  Widget getRutinas(BuildContext context, Future<List<Rutina>> futurerutina) {
    return FutureBuilder(
      future: futurerutina,
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
                ? rutinalist(snapshot.data)
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

  Widget rutinalist(List<Rutina> rutinas) {
    return ListView.builder(
      itemCount: rutinas.length,
      itemBuilder: (context, index) {
        return ListTile(
          onTap: () {
            Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (_) => ModifyRutina(rutinas[index])))
                .then((newContact) {
              setState(() {
                messageResponse(
                    context, newContact.name + " a sido modificado...!");
              });
            });
          },
          onLongPress: () {
            removeRutina(context, rutinas[index]);
          },
          title: Text(rutinas[index].name),
          subtitle: Text(rutinas[index].descripcion),
          leading: CircleAvatar(
            child: Text(rutinas[index].name.substring(0, 1)),
          ),
          trailing: Icon(
            Icons.edit_note,
            color: Color.fromARGB(255, 215, 23, 23),
          ),
        );
      },
    );
  }

  removeRutina(BuildContext context, Rutina rutina) {
    showDialog(
        context: context,
        builder: (_) => AlertDialog(
              title: Text("Eliminar rutina"),
              content: Text(
                  "Esta seguro de eliminar la rutina: " + rutina.name + "?"),
              actions: [
                TextButton(
                  onPressed: () {
                    setState(() {
                      deleteRutina(rutina.id).then((rutina) {
                        if (rutina.id != '') {
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
