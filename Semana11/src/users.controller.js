import { Router } from "express";
import { UsersService } from "./users.service.js";
import { AuthService } from "./auth.service.js";
import { isAuth } from "./auth.middleware.js";

// SEJA RESPONSAVEL PELA COMUNICACAO HTTP;
class UserController {
  constructor() {
    this.userService = new UsersService();
    this.authService = new AuthService();
  }

  async login(req, res) {
    this.authService.authenticate(req, res);
  }

  // AUTHENTICATION
  // AUTHORITZATION
  // DOCUMENTACAO DE API
  async getAll(req, res) {
    console.log({ service: this.userService})
    const users = await this.userService.getAll(req.user);
    return res.json(users);
  }

  async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await this.userService.create(name, email, password);
      return res.json(user);
    } catch (error) {
      res.status(500).send("UNKNOWN ERROR")
    }
  }
}

const UserRouter = Router();

const userController = new UserController();

UserRouter.post('/auth', (req, res) => userController.login(req, res));
UserRouter.get('/users', isAuth, (req, res) => userController.getAll(req, res));
UserRouter.post('/users', (req, res) => userController.create(req, res));

export { UserRouter }