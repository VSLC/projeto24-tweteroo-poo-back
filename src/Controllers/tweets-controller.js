import {
  createTweetService,
  getTweetService,
  limitTweetsService,
} from "../Services/tweets-service.js";

import { tweets } from "../databaseArrays/database.js";

export async function postTweets(req, res) {
  const { tweet, username } = req.body;
  console.log(tweet, username, "controller");
  const createTweet = await createTweetService(tweet, username);

  res.status(201).send("OK, seu tweet foi criado");
}

export async function getTweets(req, res) {
  const { username } = req.params;
  const getTweets = await getTweetService(username);

  res.status(200).send(getTweets);
}

export async function limitTweets(req, res) {
  const { page } = req.query;
  const limitTweets = await limitTweetsService(page);

  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send([...tweets].reverse());
  }
  return res.status(200).send([...tweets].reverse().slice(start, end));
}
