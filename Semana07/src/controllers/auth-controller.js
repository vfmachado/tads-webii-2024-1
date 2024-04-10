const db = require("../db-config/db-connection");
const { UserRepository, User } = require("../models/User");


class AuthController {

    constructor() {
        this.userRepository = new UserRepository(db);
    }
    
    mostralogin(req, res) {
        res.render('login')
    }

    login(req, res) {
        const { email, password } = req.body;
        const user = this.userRepository.getByEmail(email);
        console.log({ user })
        if (user) {
            if (user.password !== password) {
                res.status(401).json({ message: 'Invalid password' })
                return;
            } else {
                req.session.user = user;
            }
        } else {
            res.status(401).json({ message: 'User not found' });
            return;
        }
        res.redirect('/');
    }

    logout(req, res) {
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = AuthController;