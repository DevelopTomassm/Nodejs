import 'package:frontend/drawer_menu.dart';
import 'package:frontend/models/user.model.dart';
import 'package:frontend/layouts/message_response.dart';
import 'package:frontend/layouts/users/edit.user.dart';
import 'package:frontend/layouts/users/crear.user.dart';
import 'package:frontend/petitions/user.petition.dart';
import 'package:flutter/material.dart';

class MyUserPage extends StatefulWidget {
  static const String routeName = '/users';
  final String _title;
  MyUserPage(this._title);
  @override
  State<StatefulWidget> createState() => _MyUserPage();
}

class _MyUserPage extends State<MyUserPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Usuarios'),
      ),
      drawer: DrawerMenu(),
      body: getUsers(context, listUser()),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
                  context, MaterialPageRoute(builder: (_) => RegisterContact()))
              .then((newContact) {
            setState(() {
              messageResponse(
                  context, newContact.name + " a sido guardado...!");
            });
          });
        },
        tooltip: "Agregar usuario",
        child: Icon(Icons.add),
      ),
    );
  }

  Widget getUsers(BuildContext context, Future<List<User>> futureUser) {
    return FutureBuilder(
      future: futureUser,
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
                ? userlist(snapshot.data)
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

  Widget userlist(List<User> users) {
    return ListView.builder(
      itemCount: users.length,
      itemBuilder: (context, index) {
        return ListTile(
          onTap: () {
            Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (_) => ModifyContact(users[index])))
                .then((newContact) {
              setState(() {
                messageResponse(
                    context, newContact.name + " a sido modificado...!");
              });
            });
          },
          onLongPress: () {
            removeUser(context, users[index]);
          },
          title: Text(users[index].name),
          subtitle: Text(users[index].password),
          leading: CircleAvatar(
            child: Text(users[index].name.substring(0, 1)),
          ),
          trailing: Icon(
            Icons.edit_note,
            color: Color.fromARGB(255, 215, 23, 23),
          ),
        );
      },
    );
  }

  removeUser(BuildContext context, User user) {
    showDialog(
        context: context,
        builder: (_) => AlertDialog(
              title: Text("Eliminar user"),
              content: Text("Esta seguro de eliminar a " + user.name + "?"),
              actions: [
                TextButton(
                  onPressed: () {
                    setState(() {
                      deleteUser(user.id).then((usuario) {
                        if (usuario.id != '') {
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
