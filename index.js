import express from "express";
import bodyParser from "body-parser";
import DbConnection from "./config/dbConfig.js";

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
} catch (error) {
  throw error;
}
DbConnection();
