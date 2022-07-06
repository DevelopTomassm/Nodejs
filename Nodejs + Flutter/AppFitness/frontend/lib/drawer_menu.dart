import 'package:flutter/material.dart';

import 'main.dart';

class DrawerMenu extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: <Widget>[
          _buildDrawerHeader(),
          _buildDrawerItem(
              icon: Icons.home_sharp,
              text: 'Inicio',
              onTap: () =>
                  {Navigator.pushReplacementNamed(context, MyApp.home)}),
          _buildDrawerItem(
              icon: Icons.account_circle_sharp,
              text: 'Perfil',
              onTap: () =>
                  {Navigator.pushReplacementNamed(context, MyApp.perfil)}),
          _buildDrawerItem(
              icon: Icons.food_bank_sharp,
              text: 'Recetas',
              onTap: () =>
                  {Navigator.pushReplacementNamed(context, MyApp.recetas)}),
          _buildDrawerItem(
              icon: Icons.fitness_center_sharp,
              text: 'Rutinas',
              onTap: () =>
                  {Navigator.pushReplacementNamed(context, MyApp.rutinas)}),
          ListTile(
            title: Text('Realizado por Tomas Salcedo'),
            onTap: () {},
          ),
        ],
      ),
    );
  }

  Widget _buildDrawerHeader() {
    return DrawerHeader(
        margin: EdgeInsets.zero,
        padding: EdgeInsets.zero,
        decoration: BoxDecoration(
            image: DecorationImage(
                fit: BoxFit.fill, image: AssetImage('images/fondo.jpg'))),
        child: Stack(children: <Widget>[
          Positioned(
              bottom: 12.0,
              left: 16.0,
              child: Text("Nombre del usuario",
                  style: TextStyle(
                      color: Colors.white,
                      fontSize: 20.0,
                      fontWeight: FontWeight.w500))),
        ]));
  }

  Widget _buildDrawerItem(
      {IconData? icon, String? text, GestureTapCallback? onTap}) {
    return ListTile(
      title: Row(
        children: <Widget>[
          Icon(icon),
          Padding(
            padding: EdgeInsets.only(left: 8.0),
            child: Text(text!),
          )
        ],
      ),
      onTap: onTap,
    );
  }
}
