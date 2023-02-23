import { usuarios } from "../databaseArrays/database.js";

export default function userService(username, avatar) {
  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  usuarios.push({ username, avatar });
}
