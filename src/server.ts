import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
   /*await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  }); */
  AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source Initialization", err);
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running ${port}`);
  });
})();
