const db = require("../db-config/db-connection");
const { UserRepository, User } = require("../models/User");


class UsersController {

    constructor() {
        // this.tituloRespository = new TituloRespository(db);
        this.userRepository = new UserRepository(db);
    }
    
    lista(req, res) {
        if (!req.session.user) {
            res.status(401).json({ message: 'Unauthorized' })
            return;
        }
        const users = this.userRepository.getAll();
        res.render('users', { user: req.session.user, usuarios: users})
    }

    async cadastra(req, res) {
        // e usar como middleware
        // if (req.session.user.role == 'user') {
        //     res.status(401).json({ message: 'Unauthorized' })
        //     return;
        // }
        const { name, email, password, role } = req.body;
        const user = new User(null, name, email, password, role);
        this.userRepository.insert(user);
        res.redirect('/users');
    }

}

module.exports = UsersController;