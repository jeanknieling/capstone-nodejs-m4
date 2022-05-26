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

    const createCategory = async () => {
        const token = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "carros";

        const categoryData = { name: productName };

        await request(app)
            .post("/category")
            .set({ Authorization: token })
            .send(categoryData);
    };

    it("Should be able to create a product", async () => {
        const token = await userLoginAdmTrue();
        await createCategory();
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

        const nameToFilter = "opala";

        const response = await request(app)
            .post("/products/product")
            .set({ Authorization: token })
            .send({ name: nameToFilter });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    it("Should be able to list product by category", async () => {
        const token = await userLoginAdmTrue();
        
        // Criando produto
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
            .set({ Authorization: token })
            .send({ category: categoryToFilter });

        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    it("Should be able to update the product", async () => {
        const token = await userLoginAdmTrue();

        // Criando produto
        const name = "supra";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, price, category, description };

        const productCreated = await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);
        const productId = productCreated.body.id;

        // Atualizando produto
        const newName = "celta";
        const newPrice = 1500;
        const newCategory = "carros";
        const newDescription = "céu tá preto";

        const updatedProduct = {
            name: newName,
            price: newPrice,
            category: newCategory,
            description: newDescription,
        };

        const response = await request(app)
            .patch(`/products/changes/${productId}`)
            .set({ Authorization: token })
            .send(updatedProduct);

        expect(response.status).toBe(200);
    });

    it("Should be able to delete the product", async () => {
        const token = await userLoginAdmTrue();

        const name = "skyline";
        const price = 51000;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        const productCreated = await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);
        const productId = productCreated.body.id;

        const response = await request(app)
            .delete(`/products/changes/${productId}`)
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

    const createCategory = async () => {
        const token = await userLoginAdmTrue();

        //criando nome genérico de produto
        const productName = "carros";

        const categoryData = { name: productName };

        await request(app)
            .post("/category")
            .set({ Authorization: token })
            .send(categoryData);
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
        const token = (await userLoginAdmTrue()) + "a";

        await createCategory();

        const name = "opala";
        const price = 4000;
        const category = "carros";
        const description = "opalao";

        const newProduct = { name, price, category, description };

        const productCreate = await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);
        const productId = productCreate.body.id;

        const newName = "celta";
        const newPrice = 1500;
        const newCategory = "carros";
        const newDescription = "just a simple console";

        const updatedProduct = {
            name: newName,
            price: newPrice,
            category: newCategory,
            description: newDescription,
        };

        const response = await request(app)
            .patch(`/products/changes/${productId}`)
            .set({ Authorization: token })
            .send(updatedProduct);

        expect(response.status).toBe(401);
    });

    it("Shouldn't be possible to delete the product", async () => {
        const token = (await userLoginAdmTrue()) + "a";

        const name = "opala";
        const price = 8001;
        const category = "carros";
        const description = "carro incrivel";

        const newProduct = { name, description, price, category };

        const productCreate = await request(app)
            .post("/products")
            .set({ Authorization: token })
            .send(newProduct);
        const productId = productCreate.body.id;

        const response = await request(app)
            .delete(`/products/changes/${productId}`)
            .set({ Authorization: token });

        expect(response.status).toBe(401);
    });
});
