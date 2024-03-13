
const { Router } = require('express');

const router = Router();
const SeriesController = require('../controllers/series-controller'); 

const seriesController = new SeriesController();

router.get('/', (req, res) => seriesController.listaTodos(req, res));

router.get('/:id', (req, res) => seriesController.buscaPorId(req, res));

router.post('/', (req, res) => seriesController.adiciona(req, res));

// EXISTEM VARIAS IMPLEMENTACOES ASSIM PELA INTERNET
// NESTE CASO O ROUTER SE TORNA O CONTROLLER POIS LIDA COM O REQ / RES
// router.get('/', (req, res) => {
//     // trabalha em cima do request
//     // chama a parte de logica (service)
//     // devolve a resposta
// });


module.exports = router;