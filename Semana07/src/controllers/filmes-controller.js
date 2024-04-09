const db = require("../db-config/db-connection");
const { Titulo, TituloRespository } = require("../models/Titulo");


class FilmesController {

    /*
        métodos em um controller utilizando o pattern MVC

        - entrada de dados (parser do request & validacao) 
        - lógica de negócio
        - saída de dados (resposta do servidor)

    */
    constructor() {
        this.tituloRespository = new TituloRespository(db);
    }
    
    listaTodos(req, res) {
        // consultar o  banco de dados e retornar os filmes
        const titulos = this.tituloRespository.getAll();
        res.send(titulos);
    }

    detalha(req, res) {
        res.send('Detalha para o id ' + req.params.id);
    }

    showAddPage(req, res) {
        res.render('add-filme')
    }

    async cadastra(req, res) {
        const { nome, descricao, categoria, imgUrl } = req.body;

        try {
            const titulo = new Titulo(null, nome, descricao, imgUrl, categoria);
            const result = this.tituloRespository.insert(titulo);
            // res.send(result);
            res.redirect('/filmes');
        } catch (error) {
            res.send('Erro ao cadastrar filme');
        }
    }

    async buscaSeparadoPorCategoria(req, res) {
        // todos agrupados por categoria

    }
}

module.exports = FilmesController;