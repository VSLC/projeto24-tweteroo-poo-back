import { tweets, usuarios } from "../databaseArrays/database.js";

export default class tweetService {
  constructor() {}
  async createTweetService(tweet, username) {
    if (!username || !tweet) {
      return res.status(400).send("Todos os campos são obrigatórios!");
    }
    console.log(username);
    console.log(usuarios);
    const { avatar } = usuarios.find((user) => user.username === username);

    tweets.push({ username, tweet, avatar });
  }
  async getTweetService(username) {
    const tweetsDoUsuario = tweets.filter((t) => t.username === username);
    return tweetsDoUsuario;
  }
  async limitTweetsService(page) {
    if (page && page < 1) {
      res.status(400).send("Informe uma página válida!");
      return;
    }
  }
}
