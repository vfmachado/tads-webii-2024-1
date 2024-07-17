
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
console.log("NEW PRISMA CLIENT ON PRODUCTS!");

export class ProductsService {
  constructor() {  
  }

//   addUser(user) {
//     this.users.push(user);
//   }

  async add({ name, description, price, userId}) {
    await prisma.product.create({
        data: {
            name,
            description,
            price,
            userId
        }
    });
  }
}