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
        // TODO VALIDAR O BODY
        const { email, password } = req.body;

        const user = this.userRepository.getByEmail(email);
        console.log({ user })
        if (user) {
            // TODO UTILIZAR BCRYPT PARA COMPARAR SENHAS
            if (user.password !== password) {
                // TODO RETORNAR PARA A PAGINA DE LOGIN COM ERRO DE SENHA
                res.status(401).json({ message: 'Invalid password' })
                return;
            } else {
                // SALVANDO O USUARIO NA SESSAO
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