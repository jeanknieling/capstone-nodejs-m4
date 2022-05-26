"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
var index_1 = require("./routes/index");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, index_1.appRoutes)(app);
app.get("/home", function (request, response) {
    response.send("<h1>Bem vindo ao capstone do grupo 8!!!</h1>\n                  <p>Parabens, voce esta conectado!</p>\n                  <p>Clique <a href=\"https://api-capstone-grupo8.herokuapp.com/users/\">aqui</a> para ver os Usuarios<p>");
});
if (process.env.NODE_ENV !== "test") {
    var port_1 = process.env.PORT || 3000;
    app.listen(port_1, function () {
        console.log("Server running ".concat(port_1));
    });
}
exports.default = app;
