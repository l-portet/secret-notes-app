const express = require('express');
const userController = require('../controllers/users');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.validateUser, userController.getData);
router.post('/signup', userController.create);
router.post('/signin', userController.authenticate);

module.exports = router;
