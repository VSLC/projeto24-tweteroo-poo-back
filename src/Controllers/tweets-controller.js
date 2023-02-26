import {
  createTweetService,
  getTweetService,
  limitTweetsService,
} from "../Services/tweets-service.js";

import { tweets } from "../databaseArrays/database.js";

export default class tweetsClass {
  constructor() {}
  async postTweets(req, res) {
    try {
      const { tweet, username } = req.body;
      const createTweet = await createTweetService(tweet, username);

      res.status(201).send("OK, seu tweet foi criado");
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  async getTweets(req, res) {
    try {
      const { username } = req.params;
      const getTweets = await getTweetService(username);

      res.status(200).send(getTweets);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  async limitTweets(req, res) {
    try {
      const { page } = req.query;
      const limitTweets = await limitTweetsService(page);

      const limite = 10;
      const start = (page - 1) * limite;
      const end = page * limite;

      if (tweets.length <= 10) {
        return res.send([...tweets].reverse());
      }
      return res.status(200).send([...tweets].reverse().slice(start, end));
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}

export async function postTweets(req, res) {}

export async function getTweets(req, res) {}

export async function limitTweets(req, res) {}
