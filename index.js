import express from "express";
import DbConnection from "./config/dbConfig.js";

const app = express();

const PORT = process.env.PORT || 8000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
} catch (error) {
  throw error;
}
DbConnection();
