const express = require('express');
const authController = require('../controller/authController');
const validadeAuth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', validadeAuth.validateAuth, authController.createToken);

module.exports = router;