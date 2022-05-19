"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
require("reflect-metadata");
// import AppError from './errors/appErrors';
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(index_1.default);
// app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{
//     if (err instanceof AppError){
//         return response.status(err.statusCode).json({
//             status: "error",
//             message: err.message,
//         })
//     }
//     console.log(err)
//     return response.status(500).json({
//         status: "error",
//         message: "Internal Server Error",
//     })
// })
app.listen(3000, () => {
    console.log("Server running 3000");
});
exports.default = app;
