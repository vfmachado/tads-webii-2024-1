
import { hash, hashSync } from 'bcrypt';
import { dbConnection } from './config/database.js';
import { signedUrl } from './utils/s3-storage.js';
import { getAddress } from './utils/cep.integration.js';


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

    for (const user of users) {
        delete user.password;

        user.address = await getAddress(96030700)

        if (user.image_path)
          user.publicUrl = await signedUrl(user.image_path);
    };

    return {
      requestedBy,
      data: users,
    };
  }

  async updatePhoto(userId, path) {
    const user = await this.db.user.update({ 
       where: { 
        id: userId 
      }, 
      data: { 
        image_path: path 
      }
    });
    return user;
  }
}