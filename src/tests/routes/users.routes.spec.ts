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

  it("Should be able to login an user and return the user token", async () => {
    const email = "email@mail.com";
    const password = "12345678";

    const userdata = { email, password };

    const response = await request(app).post("/users/login").send(userdata);

    expect(response.status).toBe(200);
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

describe("Testing the user routes response without sucess", () => {
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

  it("Should be not able to create a new user missing a property", async () => {
    const name = "name";
    const nickname = "nickname";
    const email = "email@mail.com";
    const birthday = "1990-01-03";
    //const password = "12345678";
    //Is missing the password property

    const userData = { name, nickname, email, birthday };

    const response = await request(app).post("/users").send(userData);

    expect(response.status).toBe(400);
  });

  it("Should be not able to login an user missing a property", async () => {
    const email = "email@mail.com";
    //Is missin the property password

    const userData = { email };

    const response = await request(app).post("/users/login").send(userData);

    expect(response.status).toBe(400);
  });

  it("Should be not able to login an user with wrong data", async () => {
    const email = "email@mail.com";
    const password = "wrongPassword";

    const userData = { email, password };

    const response = await request(app).post("/users/login").send(userData);

    expect(response.status).toBe(403);
  });

  it("Should be not able to login an user with wrong data", async () => {
    const email = "email@mail.com";
    const password = "wrongPassword";

    const userData = { email, password };

    const response = await request(app).post("/users/login").send(userData);

    expect(response.status).toBe(403);
  });

  it("Should be not able to list all users without a valid token", async () => {
    const nameCreate = "name";
    const nicknameCreate = "nickname";
    const emailCreate = "email@mail.com";
    const birthdayCreate = "1990-01-03";
    const passwordCreate = "12345678";

    const userData = {
      name: nameCreate,
      nickname: nicknameCreate,
      email: emailCreate,
      birthday: birthdayCreate,
      password: passwordCreate,
    };

    const createUserResponse = await request(app).post("/users").send(userData);
    const { email, password } = createUserResponse.body;

    const userLoginResponse = await request(app)
      .post("/users/login")
      .send({ email, password });
    const token = userLoginResponse.body.token;

    const response = await request(app)
      .get("/users")
      .set({ Authorization: token + "0" });

    expect(response.status).toBe(401);
    expect(response.body.message).toContain("Invalid Token");
  });

  it("Should be not able to list all users without a valid token", async () => {
    const email = "email@mail.com";
    const password = "12345678";

    const userLoginResponse = await request(app)
      .post("/users/login")
      .send({ email, password });
    const token = userLoginResponse.body.token;

    const response = await request(app)
      .get("/users")
      .set({ Authorization: token + "invalidToken" || undefined });

    expect(response.status).toBe(401);
    expect(response.body.message).toContain("Invalid Token or missing token");
  });

  it("Should be not able to list a logged in user without a valid token", async () => {
    const email = "email@mail.com";
    const password = "12345678";

    const userLoginResponse = await request(app)
      .post("/users/login/me")
      .send({ email, password });
    const token = userLoginResponse.body.token;

    const response = await request(app)
      .get("/users")
      .set({ Authorization: token + "invalidToken" || undefined });

    expect(response.status).toBe(401);
    expect(response.body.message).toContain("Invalid Token or missing token");
  });

  it("Should be not able to update a logged in user without a valid token", async () => {
    const email = "email@mail.com";
    const password = "12345678";

    const userLoginResponse = await request(app)
      .patch("/users/me")
      .send({ email, password });
    const token = userLoginResponse.body.token;

    const response = await request(app)
      .get("/users")
      .set({ Authorization: token + "invalidToken" || undefined });

    expect(response.status).toBe(401);
    expect(response.body.message).toContain("Invalid Token or missing token");
  });

  it("Should be not able to delete a logged in user without a valid token", async () => {
    const email = "email@mail.com";
    const password = "12345678";

    const userLoginResponse = await request(app)
      .post("/users/login/me")
      .send({ email, password });
    const token = userLoginResponse.body.token;

    const response = await request(app)
      .delete("/users/me")
      .set({ Authorization: token + "invalidToken" || undefined });

    expect(response.status).toBe(401);
    expect(response.body.message).toContain("Invalid Token or missing token");
  });
});
