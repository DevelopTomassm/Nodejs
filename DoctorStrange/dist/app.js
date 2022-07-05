"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressHandlebars = require("express-handlebars");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _chartsEmbedDom = _interopRequireDefault(require("@mongodb-js/charts-embed-dom"));

var app = (0, _express["default"])(); // settings

app.set("port", process.env.PORT || 3000);
app.set("views", _path["default"].join(__dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars.create)({
  layoutsDir: _path["default"].join(app.get("views"), "layout"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaulLayout: "main",
  extname: ".hbs"
}).engine);
app.set("view engine", ".hbs"); // middlewares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
})); // routes

app.use(_index["default"]); // public route

app.use(_express["default"]["static"](_path["default"].join(__dirname, "public")));
app.use(function (req, res, next) {
  res.status(404).render("404");
});
var _default = app;
exports["default"] = _default;