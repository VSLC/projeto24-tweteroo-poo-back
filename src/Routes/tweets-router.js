import {
  postTweets,
  getTweets,
  limitTweets,
} from "../Controllers/tweets-controller.js";
import express from "express";
import tweetsClass from "../Controllers/tweets-controller.js";

const tweetsRouter = express();
tweetsRouter.post("/tweets", (req, res) =>
  new tweetsClass().postTweets(req, res)
);
tweetsRouter.get("/tweets/:username", (req, res) =>
  new tweetsClass().getTweets(req, res)
);
tweetsRouter.get("/tweets", (req, res) =>
  new tweetsClass().limitTweets(req, res)
);

export default tweetsRouter;
