import express from "express";
import bodyParser from "body-parser";
import { renderHomePage } from "./controllers/homeControllers.js";
import { addCountry } from "./controllers/countryController.js";
import { createNewUser, handleUserChange } from "./controllers/userController.js";
import db from './db.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", renderHomePage);

app.post("/add", addCountry);

app.post("/user", handleUserChange);

app.post("/new", createNewUser);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});