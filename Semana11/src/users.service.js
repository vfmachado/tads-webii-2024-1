
import { hash, hashSync } from 'bcrypt';
import { dbConnection } from './config/database.js';


export class UsersService {
  constructor() {  
    this.db = dbConnection;
  }

  async create(name, email, password) {
    const encrypted = hashSync(password, 12);
    const newUser = await this.db.user.create({
        data: {
            name,
            email,
            password: encrypted
        }
    });
    return newUser;
  }

  async getAll(requestedBy) {
    const users = await this.db.user.findMany({
        include: {
            products: true
        }
    });
    return {
      requestedBy,
      data: users,
    };
  }
}