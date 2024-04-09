const db = require("../db-config/db-connection");
const { UserRepository, User } = require("../models/User");


class UsersController {

    constructor() {
        // this.tituloRespository = new TituloRespository(db);
        this.userRepository = new UserRepository(db);
    }
    
    lista(req, res) {
        const users = this.userRepository.getAll();
        res.render('users', { usuarios: users})
    }

    async cadastra(req, res) {
        const { name, email, password, role } = req.body;
        const user = new User(null, name, email, password, role);
        this.userRepository.insert(user);
        res.redirect('/users');
    }

}

module.exports = UsersController;