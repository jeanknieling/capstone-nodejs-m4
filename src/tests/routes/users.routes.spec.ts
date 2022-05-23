import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing the user routes", () => {
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

    it("Should be able to create a new user", async () => {
        const name = "name";
        const nickname = "nickname";
        const email = "email@mail.com";
        const birthday = "1990-01-03";
        const password = "12345678";
        const isAdm = true;

        const userData = { name, nickname, email, birthday, password, isAdm };

        const response = await request(app).post("/users").send(userData);

        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
        expect(response.body.nickname).toBeDefined();
        expect(response.body.birthday).toBeDefined();
        expect(response.body.password).toBeDefined();
        expect(response.body.isAdm).toBeDefined();
        expect(response.body.created_at).toBeDefined();
        expect(response.body.updated_at).toBeDefined();
    });

    it("Should be able login an user and return the user token", async () => {
        const email = "email@mail.com";
        const password = "12345678";

        const userdata = { email, password };

        const response = await request(app).post("/users/login").send(userdata);

        expect(response.status).toBe(201);
        expect(response.body.token).toBeDefined();
    });

    it("Should return all users registered in the database", async () => {
        const email = "email@mail.com";
        const password = "12345678";
        const userdata = { email, password };

        const login = await request(app).post("/users/login").send(userdata);
        const token = login.body.token;

        const response = await request(app)
            .get("/users")
            .set({ Authorization: token });
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    it("Should only list the logged in user", async () => {
        const email = "email@mail.com";
        const password = "12345678";

        const userdata = { email, password };

        const login = await request(app).post("/users/login").send(userdata);
        const token = login.body.token;

        const response = await request(app)
            .get("/users/me")
            .set({ Authorization: token });

        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
        expect(response.body.isAdm).toBeDefined();
        expect(response.body.nickname).toBeDefined();
        expect(response.body.birthday).toBeDefined();
        expect(response.body.password).toBeDefined();
        expect(response.body.created_at).toBeDefined();
        expect(response.body.updated_at).toBeDefined();
        expect(response.body.address).toBeDefined();
        expect(response.body.buys).toBeDefined();
    });

    it("Must update only the logged in user", async () => {
        const email = "email@mail.com";
        const password = "12345678";
        const userdata = { email, password };

        const login = await request(app).post("/users/login").send(userdata);
        const token = login.body.token;

        const updatedNickname = "namae";
        const updatedPassword = "87654321";
        const newUserData = { updatedNickname, updatedPassword };

        const response = await request(app)
            .patch("/users/me")
            .set({ Authorization: token })
            .send(newUserData);

        expect(response.status).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
        expect(response.body.isAdm).toBeDefined();
        expect(response.body.nickname).toBeDefined();
        expect(response.body.birthday).toBeDefined();
        expect(response.body.password).toBeDefined();
        expect(response.body.created_at).toBeDefined();
        expect(response.body.updated_at).toBeDefined();
        expect(response.body.address).toBeDefined();
        expect(response.body.buys).toBeDefined();
    });

    it("Must delete only the logged in user", async () => {
        const email = "email@mail.com";
        const password = "12345678";
        const userdata = { email, password };

        const login = await request(app).post("/users/login").send(userdata);
        const token = login.body.token;

        const response = await request(app)
            .delete("/users/me")
            .set({ Authorization: token });

        expect(response.status).toBe(200);
    });
});
// Lembrar de fazer o teste de erros das rotas do user.
// a partir daqui será implementado os testes de rotas dos produtos.
/* describe("Testing the product routes", () => {
    let connection: DataSource;
    beforeAll(async () => {
        await AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((err) => {
                console.error("Error during Data Source initialization");
            });
    });
    afterAll(async () => {
        await connection.destroy();
    });
    it("Should create be able to create a new product", async () => {
        
    });
}); */