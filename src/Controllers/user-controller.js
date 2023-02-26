import userService from "../Services/user-service.js";

export default class usersClass {
  constructor() {}
  async postUser(req, res) {
    try {
      const { username, avatar } = req.body;
      const registryUser = await userService(username, avatar);

      res.status(200).send("OK deu tudo certo");
    } catch (error) {
      return res.sendStatus(500);
    }
  }
}
