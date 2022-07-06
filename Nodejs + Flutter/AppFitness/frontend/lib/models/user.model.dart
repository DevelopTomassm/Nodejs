class User {
  var id;
  var name;
  var email;
  var password;

  User({this.id, this.name, this.email, this.password});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
        id: json['_id'],
        name: json['nombre'],
        email: json['email'],
        password: json['password']);
  }
}
