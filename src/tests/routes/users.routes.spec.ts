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
});
