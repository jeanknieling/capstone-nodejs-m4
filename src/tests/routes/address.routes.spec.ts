import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing adress routes", () => {
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
        const birthday = "1990-09-27";
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

    it("Should create a new address in the database", async () => {
        const token = await userLoginAdmTrue();

        const zipcode = "03345000";
        const street = "Avenida Sapopemba";
        const number = 3740;
        const neighborhood = "null";
        const complement = "null";

        const newAddress = {
            zipcode,
            street,
            number,
            neighborhood,
            complement,
        };

        const createNewAddres = await request(app)
            .post("/address")
            .set({ Authorization: token })
            .send(newAddress);

        expect(createNewAddres.status).toBe(201);
    });

    it("Should list all addresses registered in the database", async () => {
        const token = await userLoginAdmTrue();

        const response = await request(app)
            .get("/address")
            .set({ Authorization: token });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    it("Should update the address from de database", async () => {
        const token = await userLoginAdmTrue();
    });
});

describe("Testing adress routes errors", () => {
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

    const userLoginAdmFalse = async () => {
        const name = "name";
        const nickname = "nickname";
        const email = "email@mail.com";
        const birthday = "1990-09-27";
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

    it("Should fail at address registration", async () => {
        const token = (await userLoginAdmFalse()) + "a";

        const zipcode = "03345000";
        const street = "Avenida Sapopemba";
        const number = 3740;
        const neighborhood = "null";
        const complement = "null";

        const newAddress = {
            zipcode,
            street,
            number,
            neighborhood,
            complement,
        };

        const createNewAddres = await request(app)
            .post("/address")
            .set({ Authorization: token })
            .send(newAddress);

        expect(createNewAddres.status).toBe(401);
    });

    it("Should fail to list all addresses", async () => {
        const createNewAddres = await request(app).post("/address");

        expect(createNewAddres.status).toBe(401);
    });
});
