const express = require('express');
const userController = require('../controller/userController');
const { validadeUser } = require('../middleware/userMiddleware');

const router = express.Router();

router.post('/user', validadeUser, userController.addUser);

module.exports = router;    