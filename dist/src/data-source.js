"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
require("dotenv/config");
exports.AppDataSource = process.env.NODE_ENV === "test"
    ? new typeorm_1.DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/**/*.ts"],
        synchronize: true,
    })
    : process.env.NODE_ENV === "dev"
        ? new typeorm_1.DataSource({
            type: "postgres",
            host: "localhost",
            port: 5435,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            synchronize: true,
            logging: true,
            entities: ["src/entities/*.ts"],
            migrations: ["src/migrations/*.ts"],
        })
        : new typeorm_1.DataSource({
            type: "postgres",
            url: process.env.DATABASE_URL,
            ssl: process.env.NODE_ENV === "production"
                ? { rejectUnauthorized: false }
                : false,
            synchronize: false,
            logging: true,
            entities: process.env.NODE_ENV === "production"
                ? ["dist/entities/*.js"]
                : ["src/entities/*.ts"],
            migrations: process.env.NODE_ENV === "production"
                ? ["dist/migrations/*.js"]
                : ["src/migrations/*.ts"],
        });
if (process.env.NODE_ENV !== "test") {
    exports.AppDataSource.initialize()
        .then(function () {
        console.log("Data Source Initialized");
    })
        .catch(function (err) {
        console.error("Error during Data Source Initialization", err);
    });
}
