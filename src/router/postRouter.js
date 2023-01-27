const express = require('express');

const { validateToken } = require('../middleware/authMiddleware');
const { validatePost } = require('../middleware/postMiddleware');
const { getAllPost, addPost, getPostById } = require('../controller/postController');

const router = express.Router();

router.get('/post', validateToken, getAllPost);
router.post('/post', validateToken, validatePost, addPost);
router.get('/post/:id', validateToken, getPostById);

module.exports = router;