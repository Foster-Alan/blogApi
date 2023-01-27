const express = require('express');
const { addUser, deleteUser,
     getAllUser, getUserById } = require('../controller/userController');
const { validadeUser } = require('../middleware/userMiddleware');
const { validateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/user', validadeUser, addUser);
router.use('/user', validateToken);
router.get('/user', getAllUser);
router.get('/user/:id', getUserById);
router.delete('/user/me', validateToken, deleteUser);

module.exports = router;    