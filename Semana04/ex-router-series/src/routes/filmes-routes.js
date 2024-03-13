
const { Router } = require('express');

const router = Router();
const FilmesController = require('../controllers/filmes-controller'); 

const filmesController = new FilmesController();

router.get('/', (req, res) => filmesController.listaTodos(req, res));
router.get('/:id', (req, res) => filmesController.detalha(req, res));

module.exports = router;