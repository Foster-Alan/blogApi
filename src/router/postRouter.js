const express = require('express');

const { validateToken } = require('../middleware/authMiddleware');
const { validatePost, validateUpdatePost } = require('../middleware/postMiddleware');
const { getAllPost, addPost, getPostById, updatePost } = require('../controller/postController');

const router = express.Router();

router.get('/post', validateToken, getAllPost);
router.post('/post', validateToken, validatePost, addPost);
router.get('/post/:id', validateToken, getPostById);
router.put('/post/:id', validateToken, validateUpdatePost, updatePost);

module.exports = router;