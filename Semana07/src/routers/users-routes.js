
const { Router } = require('express');

const router = Router();
const UsersController = require('../controllers/users-controller'); 

const usersController = new UsersController();

router.get('', (req, res) => usersController.lista(req, res));
router.post('', (req, res) => usersController.cadastra(req, res));


module.exports = router;