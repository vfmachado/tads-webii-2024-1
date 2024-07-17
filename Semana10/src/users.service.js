
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
console.log("NEW PRISMA CLIENT ON USERS!");

export class UsersService {
  constructor() {  
  }

  async create(name, email, password) {
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    });
    return newUser;
  }

  async getAll() {
    const users = await prisma.user.findMany({
        include: {
            products: true
        }
    });
    return users;
  }
}