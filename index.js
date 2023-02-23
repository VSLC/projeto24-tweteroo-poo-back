import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import { tweets, usuarios } from "./src/databaseArrays/database.js";
import tweetsRouter from "./src/Routes/tweets-router.js";
import userRouter from "./src/Routes/user-router.js";

const app = express();

app.use(cors());
app.use(json());

app.use(userRouter);
app.use(tweetsRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue("Servidor funfando de boas!!!"));
});
