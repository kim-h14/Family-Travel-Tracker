import express from "express";
import bodyParser from "body-parser";
import { renderHomePage } from "./controllers/homeControllers.js";
import { addCountry } from "./controllers/countryController.js";
import { createNewUser, handleUserChange } from "./controllers/userController.js";
import db from './db.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from secret.env
dotenv.config({
  path: path.resolve(__dirname, '.env'),
  allowEmptyValues: true
});
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", renderHomePage);

app.post("/add", addCountry);

app.post("/user", handleUserChange);

app.post("/new", createNewUser);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});