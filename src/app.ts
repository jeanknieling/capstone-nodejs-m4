import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import { appRoutes } from "./routes/index";

const app = express();

app.use(express.json());

appRoutes(app);

app.get("/home", (request, response) => {
  response.send(`<h1>Bem vindo ao capstone do grupo 8!!!</h1>
                  <p>Parabens, voce esta conectado!</p>
                  <p>Clique <a href="https://api-capstone-grupo8.herokuapp.com/users/">aqui</a> para ver os Usuarios<p>`);
});

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running ${port}`);
  });
}

export default app;
