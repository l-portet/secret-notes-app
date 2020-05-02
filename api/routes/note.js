const express = require('express');
const noteController = require('../controllers/notes');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.validateUser, noteController.getData);
router.put('/', auth.validateUser, noteController.update);

module.exports = router;
