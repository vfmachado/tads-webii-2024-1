
const { Router } = require('express');

const router = Router();
const AuthController = require('../controllers/auth-controller'); 

const authController = new AuthController();

router.get('/login', (req, res) => authController.mostralogin(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.get('/logout', (req, res) => authController.logout(req, res));


module.exports = router;