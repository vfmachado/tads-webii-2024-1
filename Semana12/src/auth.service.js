import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';
import {dbConnection} from './config/database.js';


export class AuthService {

    constructor() {
        this.db = dbConnection;
    }

    async authenticate(req, res) {
        const { email, password } = req.body;
        
        const user = await this.db.user.findUnique({
            where: {
                email
            }
        })

        const match = compareSync(password, user.password);

        let token = null;
        if (match) {
            delete user.password;
            token = jwt.sign(user, 'SECRET', {
                // options
            });
        }

        res.send({
            token
        });
    }
}