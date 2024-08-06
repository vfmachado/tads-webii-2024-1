import { Router } from "express";
import { UsersService } from "./users.service.js";
import { AuthService } from "./auth.service.js";
import { isAuth } from "./auth.middleware.js";

import { fileByKey, uploadS3 } from "./utils/s3-storage.js";

import multer from 'multer'
const upload = multer()

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

  async uploadPhoto(req, res) {
    const userId = req.user.id;
    const path = req.file.originalname;

    console.log({ file: req.file });

    const result = await uploadS3(req.file);
    console.log({ result });

    const response = await this.userService.updatePhoto(userId, path);
    return res.json(response);
    
  }

  async buscarArquivo(req, res) {
    const data = await fileByKey('Tabalho I.pdf')
    res.setHeader('Content-Type', 'application/pdf');
    data.pipe(res);
  }
}

const UserRouter = Router();

const userController = new UserController();

UserRouter.post('/auth', (req, res) => userController.login(req, res));
UserRouter.get('/users', isAuth, (req, res) => userController.getAll(req, res));
UserRouter.post('/users', (req, res) => userController.create(req, res));

UserRouter.patch('/users', isAuth, upload.single('arquivo'), (req, res) => userController.uploadPhoto(req, res) );

UserRouter.get('/arquivo', (req, res) => userController.buscarArquivo(req, res));

export { UserRouter }