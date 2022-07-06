import 'package:frontend/models/user.model.dart';
import 'package:frontend/layouts/text_box.dart';
import 'package:frontend/petitions/user.petition.dart';
import 'package:flutter/material.dart';

class RegisterContact extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _RegisterContact();
}

class _RegisterContact extends State<RegisterContact> {
  late TextEditingController controllerName;
  late TextEditingController controllerEmail;
  late TextEditingController controllerPassword;

  @override
  void initState() {
    controllerName = new TextEditingController();
    controllerEmail = new TextEditingController();
    controllerPassword = new TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Registrarse"),
        ),
        body: ListView(
          children: [
            TextBox(controllerName, "Nombre"),
            TextBox(controllerEmail, "Email"),
            TextBox(controllerPassword, "Password"),
            ElevatedButton(
                onPressed: () {
                  String name = controllerName.text;
                  String email = controllerEmail.text;
                  String password = controllerPassword.text;

                  if (name.isNotEmpty &&
                      email.isNotEmpty &&
                      password.isNotEmpty) {
                    User u =
                        new User(name: name, email: email, password: password);

                    addUser(u).then((user) {
                      if (user.id != '') {
                        print('Usuario registrado...!');
                        Navigator.pop(context, user);
                      }
                    });
                  }
                },
                child: Text("Registrarse")),
          ],
        ));
  }
}
