
const { Router } = require('express');

const router = Router();
const UsersController = require('../controllers/users-controller'); 
const isAdmin = require('../middlewares/is-admin');

const usersController = new UsersController();

router.get('', (req, res) => usersController.lista(req, res));
router.post('', isAdmin , (req, res) => usersController.cadastra(req, res));


module.exports = router;