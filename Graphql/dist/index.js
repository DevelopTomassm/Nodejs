"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(3000, function () {
  return console.log('Servidor en el puerto 3000');
});
//# sourceMappingURL=index.js.map