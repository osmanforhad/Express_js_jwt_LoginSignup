import express from "express";
import bodyParser from "body-parser";
import DbConnection from "./config/dbConfig.js";
import route from "./routes/Routes.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", route);

const PORT = process.env.PORT || 8000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
} catch (error) {
  throw error;
}
DbConnection();
