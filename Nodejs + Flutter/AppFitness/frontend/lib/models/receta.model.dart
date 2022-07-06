class Receta {
  var id;
  var name;
  var descripcion;

  Receta({this.id, this.name, this.descripcion});

  factory Receta.fromJson(Map<String, dynamic> json) {
    return Receta(
        id: json['_id'],
        name: json['nombre'],
        descripcion: json['descripcion']);
  }
}
