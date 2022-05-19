import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
// import AppError from './errors/appErrors';
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(routes);
app.get("/home", (request, response) => {
  response.send("<h1>Bem vindo ao capstone do grupo 8!!!</h1>");
})
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running ${port}`);
});

export default app;
