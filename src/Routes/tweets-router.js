import {
  postTweets,
  getTweets,
  limitTweets,
} from "../Controllers/tweets-controller.js";
import express from "express";

const tweetsRouter = express();
tweetsRouter.post("/tweets", postTweets);
tweetsRouter.get("/tweets/:username", getTweets);
tweetsRouter.get("/tweets", limitTweets);

export default tweetsRouter;
