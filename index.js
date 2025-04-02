import express from "express";
import bodyParserMiddleware from "body-parser";
import DbConnection from "./config/dbConfig.js";
import route from "./routes/Routes.js";
import corsMiddleware from "cors";
import createAdminAccount from "./AdminScripts/Admin.js";

const app = express();
app.use(bodyParserMiddleware.json());
app.use(corsMiddleware());

//calling method for create admin AC
createAdminAccount();
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
