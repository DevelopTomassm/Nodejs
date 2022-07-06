import 'package:frontend/models/user.model.dart';
import 'package:frontend/petitions/user.petition.dart';
import 'package:flutter/material.dart';
import 'package:frontend/layouts/text_box.dart';

class ModifyContact extends StatefulWidget {
  final User user;
  ModifyContact(this.user);
  @override
  State<StatefulWidget> createState() => _ModifyContact();
}

class _ModifyContact extends State<ModifyContact> {
  late TextEditingController controllerName;
  late TextEditingController controllerEmail;
  //late TextEditingController controllerPassword;
  late String id;

  @override
  void initState() {
    User u = widget.user;
    controllerName = new TextEditingController(text: u.name);
    controllerEmail = new TextEditingController(text: u.email);
    //controllerPassword = new TextEditingController(text: u.password);
    id = u.id;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Modificar usuario"),
      ),
      body: ListView(
        children: [
          TextBox(controllerName, "Nombre"),
          TextBox(controllerEmail, "Email"),
          //TextBox(controllerPassword, "Password"),
          ElevatedButton(
              onPressed: () {
                String name = controllerName.text;
                String email = controllerEmail.text;
                //String password = controllerPassword.text;

                if (name.isNotEmpty &&
                        email
                            .isNotEmpty /*&&
                    password.isNotEmpty*/
                    ) {
                  User u = new User(
                      name: name, email: email, /*password: password,*/ id: id);

                  modifyUser(u).then((user) {
                    if (user.id != '') {
                      print('User modificado...!');
                      Navigator.pop(context, user);
                    }
                  });
                }
              },
              child: Text("Actualizar")),
        ],
      ),
    );
  }
}
