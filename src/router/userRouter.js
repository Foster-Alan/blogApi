const express = require('express');
const userController = require('../controller/userController');
const { validadeUser } = require('../middleware/userMiddleware');
const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/user', validadeUser, userController.addUser);
router.use('/user', validateToken);
router.get('/user', userController.getAllUser);
router.get('/user/:id', userController.getUserById);

module.exports = router;    