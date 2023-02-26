import usersClass from "../Controllers/user-controller.js";
import express from "express";

const userRouter = express();
userRouter.post("/sign-up", (req, res) => new usersClass().postUser(req, res));

export default userRouter;
