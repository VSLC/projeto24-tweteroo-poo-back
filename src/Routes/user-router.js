import { postUsers } from "../Controllers/user-controller.js";
import express from "express";

const userRouter = express();
userRouter.post("/sign-up", postUsers);

export default userRouter;
