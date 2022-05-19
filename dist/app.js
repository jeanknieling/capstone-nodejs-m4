"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_1.default);
app.get("/home", (request, response) => {
    response.send("<h1>Bem vindo ao capstone do grupo 8!!!</h1>");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running ${port}`);
});
exports.default = app;
