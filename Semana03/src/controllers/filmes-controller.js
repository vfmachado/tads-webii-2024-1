

class FilmesController {
    listaTodos(req, res) {
        res.send('Filmes');
    }
    detalha(req, res) {
        res.send('Detalha');
    }
}

module.exports = FilmesController;