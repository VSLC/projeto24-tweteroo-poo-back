import userService from "../Services/user-service.js";

export async function postUsers(req, res) {
  const { username, avatar } = req.body;
  const registryUser = await userService(username, avatar);

  res.status(200).send("OK deu tudo certo");
}
