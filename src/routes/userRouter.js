var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const { loginValidation, registerValidation } = require('../middlewares/validator');

/* GET home page. */
router.get('/register', userController.register);

router.post('/register', registerValidation, userController.processRegister);

router.get('/login', userController.login);

router.post('/login', loginValidation, userController.processLogin);

module.exports = router;
