const db = require("../db-config/db-connection");
const { UserRepository, User } = require("../models/User");


class AuthController {

    constructor() {
        // this.userRepository = new UserRepository(db);
    }
    
    mostralogin(req, res) {
        res.render('login')
    }

    login(req, res) {

    }

    logout(req, res) {

    }

}

module.exports = AuthController;