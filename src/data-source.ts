import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/**/*.ts"],
        synchronize: true,
      })
    : process.env.NODE_ENV === "dev"
    ? new DataSource({
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
    : new DataSource({
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        synchronize: false,
        logging: true,

        entities:
          process.env.NODE_ENV === "production"
            ? ["dist/entities/*.js"]
            : ["src/entities/*.ts"],

        migrations:
          process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
            : ["src/migrations/*.ts"],
      });

if (process.env.NODE_ENV !== "test") {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source Initialized");
    })
    .catch((err) => {
      console.error("Error during Data Source Initialization", err);
    });
}
