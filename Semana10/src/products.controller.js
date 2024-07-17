import { Router } from "express";
import { ProductsService } from "./products.service.js";

class ProductsController {
  constructor() {
    this.productsService = new ProductsService();
  }

  async create(req, res) {
    const { name, description, price, userId } = req.body;
    await this.productsService.add({ name, description, price, userId });
    res.status(201).send();
  }
}

const ProductsRouter = Router();

const productsController = new ProductsController();
ProductsRouter.post("/products", (req, res) => productsController.create(req, res));

export { ProductsRouter }