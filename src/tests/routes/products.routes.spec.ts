import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing the user routes response with sucess", () => {
    let connection: DataSource;

    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((err) => {
                console.error("Error during Data Source initialization", err);
            });
    });

    afterAll(async () => {
        await connection.destroy();
    });

    const userLoginAdmTrue = async () => {
        const name = "name";
        const nickname = "nickname";
        const email = "email@mail.com";
        const birthday = "1990-01-03";
        const password = "12345678";
        const isAdm = true;
        //definindo variável com todas as chaves criadas
        const createUser = { name, nickname, email, birthday, password, isAdm };
        //enviando variável com dados de criação de usuário para a requisição.
        await request(app).post("/users").send(createUser);
        //fazendo login do usuário
        const loginUser = { email, password };
        //recebendo o token de usuário após login
        const userLogin = await request(app)
            .post("/users/login")
            .send(loginUser);
        const token = userLogin.body.token;

        return token;
    };

    const userLoginAdmFalse = async () => {
        const name = "name";
        const nickname = "nickname";
        const email = "email@mail.com";
        const birthday = "1990-01-03";
        const password = "12345678";
        const isAdm = false;
        //definindo variável com todas as chaves criadas
        const createUser = { name, nickname, email, birthday, password, isAdm };
        //enviando variável com dados de criação de usuário para a requisição.
        await request(app).post("/users").send(createUser);
        //fazendo login do usuário
        const loginUser = { email, password };
        //recebendo o token de usuário após login
        const userLogin = await request(app)
            .post("/users/login")
            .send(loginUser);
        const token = userLogin.body.token;

        return token;
    };

    it("Should be able to create a product", async () => {
        const token = await userLoginAdmTrue();

        const name = "opala";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        const response = await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
        expect(response.body.price).toBeDefined();
        expect(response.body.category).toBeDefined();
        expect(response.body.description).toBeDefined();
    });

    it("Should be able to list all products", async () => {
        const token = await userLoginAdmTrue();

        const response = await request(app)
            .get("/products")
            .set({ Authorization: token });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });
});
