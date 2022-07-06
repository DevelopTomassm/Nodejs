class Rutina {
  var id;
  var name;
  var descripcion;

  Rutina({this.id, this.name, this.descripcion});

  factory Rutina.fromJson(Map<String, dynamic> json) {
    return Rutina(
        id: json['_id'],
        name: json['nombre'],
        descripcion: json['descripcion']);
  }
}
