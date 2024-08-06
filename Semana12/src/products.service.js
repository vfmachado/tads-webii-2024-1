import { dbConnection } from "./config/database.js";


export class ProductsService {
  constructor() {  
    this.db = dbConnection;
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