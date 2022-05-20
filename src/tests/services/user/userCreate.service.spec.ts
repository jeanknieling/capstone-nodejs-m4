import userCreateService from "../../../services/user/userCreate.service";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";

describe("Create an user", () => {
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

    it("Should create a new user into database", async () => {
        const name = "name";
        const nickname = "nickname";
        const email = "email@mail.com";
        const birthday = new Date();
        const password = "12345678";

        const userData = { name, nickname, email, birthday, password };

        const newUser = await userCreateService(userData);

        expect(newUser).toEqual(
            expect.objectContaining({
                id: 1,
                name,
                nickname,
                email,
                birthday,
                password,
            })
        );
    });
});
