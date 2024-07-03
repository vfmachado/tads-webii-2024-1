
const { Router } = require('express');

const router = Router();
const FilmesController = require('../controllers/filmes-controller'); 

const filmesController = new FilmesController();

router.get('/', (req, res) => filmesController.listaTodos(req, res));
router.get('/adicionar', (req, res) => filmesController.showAddPage(req, res));
router.get('/:id', (req, res) => filmesController.detalha(req, res));
router.post('', (req, res) => filmesController.cadastra(req, res));


module.exports = router;