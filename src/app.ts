import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import routes from "./routes/index";

const app = express();

app.use(express.json());
app.use(routes);
app.get("/home", (request, response) => {
  response.send("<h1>Bem vindo ao capstone do grupo 8!!!</h1>");
})

export default app;
