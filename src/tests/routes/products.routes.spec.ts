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

    it("Should be able to list product by name", async () => {
        const token = await userLoginAdmTrue();

        const name = "opala";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        const nameToFilter = "opala";

        const response = await request(app)
            .post("/products/product")
            .send({ name: nameToFilter });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined()
    });
    it("Should be able to list product by category", async () => {
        const token = await userLoginAdmTrue();

        const name = "opala";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        const categoryToFilter = "carros";

        const response = await request(app)
            .post("/products/category")
            .send({ name: categoryToFilter });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined()
    });

    it("Should be able to update the product", async () => {
        const token = await userLoginAdmTrue();

        const name = "Microwave";
        const price = 4000;
        const category = "electro";
        const description = "just a simple microwave";

        const newProduct = { name, price, category, description };

        await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        const newName = "Xbox";
        const newPrice = 1500;
        const newCategory = "video-game";
        const newDescription = "just a simple console";

        const updatedProduct = {
            name: newName,
            price: newPrice,
            category: newCategory,
            description: newDescription,
        };

        const response = await request(app)
            .patch("/products/changes/0")
            .set({ Authorization: token })
            .send(updatedProduct);

        expect(response.status).toBe(200);
        expect(response.body.name).toBeDefined();
        expect(response.body.price).toBeDefined();
        expect(response.body.category).toBeDefined();
        expect(response.body.description).toBeDefined();
    });

    it("Should be able to delete the product", async () => {
        const token = await userLoginAdmTrue();

        const name = "opala";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        const response = await request(app)
            .delete("/products/changes/0")
            .set({ Authorization: token });

        expect(response.status).toBe(200);
    });
});

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

    it("Shouldn't be able to list all products", async () => {
        const response = await request(app).get("/products");

        expect(response.status).toBe(401);
    });

    it("Shouldn't be able to list filtered by name", async () => {
        const name = "random";

        const response = await request(app).get("/products").send({ name });

        expect(response.status).toBe(401);
    });

    it("Shouldn't be able to list the products filtered by category", async () => {
        const category = "random";

        const response = await request(app).get("/products").send({ category });

        expect(response.status).toBe(401);
    });

    it("Shouldn't be possible to update the product", async () => {
        const token = await userLoginAdmTrue();

        const name = "Microwave";
        const price = 4000;
        const category = "electro";
        const description = "just a simple microwave";

        const newProduct = { name, price, category, description };

        await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        const newName = "Xbox";
        const newPrice = 1500;
        const newCategory = "video-game";
        const newDescription = "just a simple console";

        const updatedProduct = {
            name: newName,
            price: newPrice,
            category: newCategory,
            description: newDescription,
        };

        const response = await request(app)
            .patch("/products/changes/0")
            .send(updatedProduct);

        expect(response.status).toBe(401);
    });

    it("Shouldn't be possible to delete the product", async () => {
        const token = await userLoginAdmTrue();

        const name = "opala";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);

        const response = await request(app).delete("/products/changes/0");

        expect(response.status).toBe(200);
    });
});
