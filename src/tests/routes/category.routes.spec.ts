import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import request from "supertest";
import app from "../../app";

describe("Testing the category routes", () => {
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

    //Criando um usuário para fazer os testes de categoria
    it("Should be able to create a new category", async () => {
        const token = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "product";

        const categoryData = { name: productName };

        const response = await request(app)
            .post("/category")
            .set({ Authorization: token })
            .send(categoryData);

        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
        expect(response.body.discount_value).toBeDefined();
        expect(response.body.created_at).toBeDefined();
        expect(response.body.updated_at).toBeDefined();
    });

    it("Should be able to list all the existing categories in the database", async () => {
        //criação das chaves para criação de usuário

        const token = await userLoginAdmTrue();

        const response = await request(app)
            .get("/category")
            .set({ Authorization: token });

        expect(response.status).toBe(200);
        expect(response.body[0].id).toBeDefined();
        expect(response.body[0].name).toBeDefined();
        expect(response.body[0].created_at).toBeDefined();
        expect(response.body[0].updated_at).toBeDefined();
        expect(response.body[0].discount_value).toBeDefined();
    });

    it("Should be able to list the existing categories by id from the database", async () => {
        const token = await userLoginAdmTrue();

        const response = await request(app)
            .get("/category/1")
            .set({ Authorization: token });

        expect(response.status).toBe(200);
        expect(response.body.id).toBeDefined();
        expect(response.body.name).toBeDefined();
        expect(response.body.created_at).toBeDefined();
        expect(response.body.updated_at).toBeDefined();
        expect(response.body.discount_value).toBeDefined();
    });

    it("Should be able to update a category", async () => {
        const token = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "product";

        const categoryData = { name: productName };

        await request(app)
            .post("/category")
            .set({ Authorization: token })
            .send(categoryData);

        const name = "milk";
        const discount_value = "5";

        const updatedData = { name, discount_value };

        const response = await request(app)
            .patch("/category/changes/1")
            .set({ Authorization: token })
            .send(updatedData);

        expect(response.status).toBe(200);
    });

    it("Should be able to delete a category", async () => {
        const TrueAdmToken = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "product";

        const categoryData = { name: productName };

        await request(app)
            .post("/category")
            .set({ Authorization: TrueAdmToken })
            .send(categoryData);

        const deleteResponse = await request(app)
            .patch("/category/changes/1")
            .set({ Authorization: TrueAdmToken });

            expect(deleteResponse.status).toBe(200)
    });

});

//teste de erros das rotas de categoria
describe("Testing the category routes errors", () => {
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

    it("Shouldn't be able to create a new category", async () => {
        const token = await userLoginAdmFalse();

        //tentando criar produto com nome genérico com usuário logado sem admin
        const productName = "product";

        const categoryData = { name: productName };

        const response = await request(app)
            .post("/category")
            .set({ Authorization: token })
            .send(categoryData);

        expect(response.status).toBe(401);
    });
    it("Shouldn't be able to list all the existing categories in the database", async () => {
        //criação das chaves para criação de usuário

        const token = (await userLoginAdmTrue()) + "a";

        const response = await request(app)
            .get("/category")
            .set({ Authorization: token });

        expect(response.status).toBe(401);
    });

    it("Shouldn't be able to list the existing categories by id from the database", async () => {
        const token = (await userLoginAdmTrue()) + "a";

        const response = await request(app)
            .get("/category/1")
            .set({ Authorization: token });

        expect(response.status).toBe(401);
    });

    it("Shouldn't be able to update a category", async () => {
        const falseAdmToken = await userLoginAdmFalse();
        const TrueAdmToken = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "product";

        const categoryData = { name: productName };

        await request(app)
            .post("/category")
            .set({ Authorization: TrueAdmToken })
            .send(categoryData);

        const name = "milk";
        const discount_value = "5";

        const updatedData = { name, discount_value };

        const response = await request(app)
            .patch("/category/changes/1")
            .set({ Authorization: falseAdmToken })
            .send(updatedData);

        expect(response.status).toBe(401);
    });

    it("Shouldn't be able to delete a category", async () => {
        const falseAdmToken = await userLoginAdmFalse();
        const TrueAdmToken = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "product";

        const categoryData = { name: productName };

        await request(app)
            .post("/category")
            .set({ Authorization: TrueAdmToken })
            .send(categoryData);

        const deleteResponse = await request(app)
            .patch("/category/changes/1")
            .set({ Authorization: falseAdmToken });

            expect(deleteResponse.status).toBe(401)
    });
});
