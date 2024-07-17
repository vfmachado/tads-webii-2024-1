import { Router } from "express";
import { UsersService } from "./users.service.js";

// SEJA RESPONSAVEL PELA COMUNICACAO HTTP;
class UserController {
  constructor() {
    this.userService = new UsersService();
  }

  // AUTHENTICATION
  // AUTHORITZATION
  // DOCUMENTACAO DE API
  async getAll(req, res) {
    console.log({ service: this.userService})
    const users = await this.userService.getAll();
    return res.json(users);
  }

  async create(req, res) {
    const { name, email, password } = req.body;
    const user = await this.userService.create(name, email, password);
    return res.json(user);
  }
}

const UserRouter = Router();

const userController = new UserController();

UserRouter.get("/users", (req, res) => userController.getAll(req, res));
UserRouter.post("/users", (req, res) => userController.create(req, res));

export { UserRouter }